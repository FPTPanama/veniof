"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { ContentCard } from "@/content/types";

type Props = {
  cards: ContentCard[];
  titleClassName: string;
  bodyClassName: string;
  /** Title (and optional intro) animated before the cards. */
  heading?: ReactNode;
};

export function NumberedFeatureCards({
  cards,
  titleClassName,
  bodyClassName,
  heading,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.querySelectorAll<HTMLElement>("[data-feature-reveal]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      const headingEl = root.querySelector<HTMLElement>("[data-feature-heading]");
      const cardEls = () =>
        gsap.utils.toArray<HTMLElement>("[data-feature-card]", root);
      const allEls = () =>
        [headingEl, ...cardEls()].filter(Boolean) as HTMLElement[];

      const playIn = () => {
        const shuffledCards = gsap.utils.shuffle(cardEls());
        const sequence = headingEl
          ? [headingEl, ...shuffledCards]
          : shuffledCards;

        gsap.killTweensOf(allEls());
        gsap.fromTo(
          sequence,
          { y: 72, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          },
        );
      };

      const playOut = () => {
        const sequence = allEls();
        gsap.killTweensOf(sequence);
        gsap.to(sequence, {
          y: 72,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: { each: 0.06, from: "end" },
          overwrite: true,
        });
      };

      ctx = gsap.context(() => {
        gsap.set(allEls(), { y: 72, opacity: 0 });

        ScrollTrigger.create({
          trigger: root,
          start: "top 78%",
          end: "bottom top",
          onEnter: playIn,
          onEnterBack: playIn,
          onLeave: playOut,
          onLeaveBack: playOut,
        });
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef}>
      {heading ? (
        <div
          data-feature-reveal
          data-feature-heading
          className="will-change-transform"
          style={{ opacity: 0 }}
        >
          {heading}
        </div>
      ) : null}

      <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-4 md:gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            data-feature-reveal
            data-feature-card
            className="will-change-transform"
            style={{ opacity: 0 }}
          >
            <h3
              className={`font-serif text-[24px] leading-[1.15] sm:text-[26px] md:text-[28px] ${titleClassName}`}
            >
              {card.title}
            </h3>
            {card.body ? (
              <p className={`mt-3 text-[15.5px] leading-[1.6] ${bodyClassName}`}>
                {card.body}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
