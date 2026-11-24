"use client";

import { ArrowRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import { HeroGear } from "../home/HeroGear";
import { SectionActions } from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

const WORKER_IMAGE = "/obrero_dorado.webp";

function TitleWords({ title }: { title: string }) {
  return (
    <>
      {title.split("\n").map((line, lineIndex, lines) => (
        <span key={`${line}-${lineIndex}`} className="block">
          {line.split(/\s+/).map((word, wordIndex, words) => (
            <span key={`${word}-${wordIndex}`} className="inline-block">
              <span
                data-hero-word
                className="inline-block opacity-0 will-change-[transform,opacity,filter]"
              >
                {word}
              </span>
              {wordIndex < words.length - 1 ? "\u00A0" : null}
            </span>
          ))}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

/**
 * Strategy page hero — fills the first screen; HeroGear is clipped
 * inside this viewport so it never bleeds into the next section.
 */
export function StrategyHeroSection({ section, locale }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const body = section.paragraphs?.[0];
  const quote = section.paragraphs?.[1];
  const quoteBy = section.callout;

  useEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    const title = titleRef.current;
    const copy = copyRef.current;
    if (!root || !parallax) return;

    const words = title?.querySelectorAll<HTMLElement>("[data-hero-word]");
    const copyTexts = copy?.querySelectorAll<HTMLElement>("[data-hero-copy-text]");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      words?.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      if (copy) {
        copy.style.opacity = "1";
        copy.style.clipPath = "none";
      }
      copyTexts?.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { ScrollSmoother }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/ScrollSmoother"),
        ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ctx = gsap.context(() => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.effects(parallax, { speed: 0.7 });
        } else {
          gsap.fromTo(
            parallax,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        if (words?.length && title) {
          gsap.fromTo(
            words,
            { y: 64, opacity: 0, filter: "blur(14px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        }

        if (copy) {
          const copyTl = gsap.timeline({
            scrollTrigger: {
              trigger: copy,
              start: "top 90%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });

          copyTl.fromTo(
            copy,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
            },
          );

          if (copyTexts?.length) {
            copyTl.fromTo(
              copyTexts,
              { x: -28, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.65,
                ease: "power2.out",
                stagger: 0.14,
              },
              "-=0.28",
            );
          }
        }
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[calc(100dvh-var(--site-header-height,6.5rem))] min-h-105 w-full overflow-hidden px-5 md:px-0"
    >
      <div className="relative mx-auto h-full w-full max-w-300 overflow-hidden ">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative h-[80%] w-[min(88%,640px)] sm:w-[min(72%,700px)] md:w-[min(62%,760px)]">
            <div
              ref={parallaxRef}
              data-speed="0.7"
              className="absolute inset-0 will-change-transform border-b-2 border-gold"
            >
              <Image
                src={WORKER_IMAGE}
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 88vw, 760px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-2 flex flex-col items-stretch justify-center overflow-hidden">
          {section.title ? (
            <h1
              ref={titleRef}
              className="relative z-1 self-center text-center text-[40px] leading-[0.98] tracking-[-0.015em] font-serif font-light text-navy sm:text-[80px] md:text-[140px]"
            >
              <TitleWords title={section.title} />
            </h1>
          ) : null}

          {body || quote ? (
            <div
              ref={copyRef}
              className="relative z-1 mt-5 w-full max-w-136 self-start bg-surface p-4 opacity-0 border-b-2 border-gold will-change-[clip-path,opacity] sm:mt-6"
            >
              {body ? (
                <p
                  data-hero-copy-text
                  className="text-left font-serif text-[19px] leading-[1.5] text-navy opacity-0 will-change-[transform,opacity] sm:text-[21px] md:text-[23px]"
                >
                  {body}
                </p>
              ) : null}
              {quote ? (
                <blockquote className={body ? "mt-4" : undefined}>
                  <p
                    data-hero-copy-text
                    className="font-serif text-[15px] leading-[1.5] text-navy/85 italic opacity-0 will-change-[transform,opacity] sm:text-[16px] md:text-[17px]"
                  >
                    “{quote}”
                  </p>
                  {quoteBy ? (
                    <footer
                      data-hero-copy-text
                      className="mt-2.5 text-[12px] font-semibold tracking-[0.04em] text-navy uppercase opacity-0 will-change-[transform,opacity] sm:text-[13px]"
                    >
                      — {quoteBy}
                    </footer>
                  ) : null}
                </blockquote>
              ) : null}
            </div>
          ) : null}

          <div className="pointer-events-auto relative z-1 mt-8 w-full max-w-136 self-start sm:mt-10">
            <SectionActions
              locale={locale}
              isDark={false}
              ctas={section.ctas}
              links={section.links}
              className="flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-7"
              ctaClassName="w-full sm:w-auto"
              linkClassName="w-full sm:w-auto"
              ctaStartIcon={
                <CirclePlus aria-hidden className="h-4 w-4 shrink-0" />
              }
              ctaEndIcon={
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              }
              linkVariant="navy"
              linkEndIcon={
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              }
            />
          </div>

          <HeroGear
            tone="surface"
            className="absolute top-1/2 left-1/2 z-0 aspect-square w-[min(780px,85vw)] -translate-x-1/2 -translate-y-[10%]"
          />
        </div>
      </div>
    </section>
  );
}
