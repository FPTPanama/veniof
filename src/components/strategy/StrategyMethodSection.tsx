"use client";

import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import { SectionEyebrow, sectionColors, titleSizeClass } from "../section-ui";

type Props = {
  section: SectionData;
};

function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (!part.startsWith("**")) return part;
    return <strong key={index}>{part.slice(2, -2)}</strong>;
  });
}

/**
 * "El método" — one item per block; title lines via SplitText, body rises with it.
 */
export function StrategyMethodSection({ section }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  const variant = section.variant ?? "navy";
  const colors = sectionColors(variant);
  const titleSize = titleSizeClass(section.titleAs ?? "h2");
  const cards = section.cards ?? [];

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !cards.length) return;

    const slides = root.querySelectorAll<HTMLElement>("[data-method-slide]");
    if (!slides.length) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      slides.forEach((slide) => {
        slide
          .querySelectorAll<HTMLElement>(
            "[data-method-title], [data-method-body]",
          )
          .forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
          });
        slide
          .querySelectorAll<HTMLElement>("[data-method-title]")
          .forEach((el) => {
            el.classList.add(
              "bg-surface",
              "box-decoration-clone",
              "px-[0.2em]",
              "pt-[0.06em]",
              "pb-[0.18em]",
              "[box-decoration-break:clone]",
            );
          });
      });
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;
    let removeSnapListeners: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { ScrollSmoother }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/SplitText"),
          import("gsap/ScrollSmoother"),
        ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      ctx = gsap.context(() => {
        const panelsEl = root.querySelector<HTMLElement>(
          "[data-method-panels]",
        );
        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-method-panel]",
          root,
        );

        const headerPx = () => {
          const raw = getComputedStyle(document.documentElement)
            .getPropertyValue("--site-header-height")
            .trim();
          const parsed = Number.parseFloat(raw);
          return Number.isFinite(parsed) && parsed > 0 ? parsed : 104;
        };

        // Discrete panel snap — any scroll gesture locks to one panel height
        // (works with ScrollSmoother; native CSS/ScrollTrigger snap does not).
        if (panelsEl && panels.length > 1) {
          let animating = false;
          let sectionActive = false;
          let lockedIndex = -1;
          let unlockTween: { kill: () => void } | undefined;
          let touchY = 0;

          // Center each panel in the viewport band below the sticky header.
          const idealTop = (panel: HTMLElement) => {
            const h = headerPx();
            const band = window.innerHeight - h;
            return h + Math.max(0, (band - panel.offsetHeight) / 2);
          };

          const nearestIndex = () => {
            let closest = 0;
            let closestDist = Number.POSITIVE_INFINITY;
            panels.forEach((panel, i) => {
              const dist = Math.abs(
                panel.getBoundingClientRect().top - idealTop(panel),
              );
              if (dist < closestDist) {
                closestDist = dist;
                closest = i;
              }
            });
            return { index: closest, dist: closestDist };
          };

          const goTo = (index: number) => {
            const next = gsap.utils.clamp(0, panels.length - 1, index);
            if (animating && next === lockedIndex) return;
            animating = true;
            lockedIndex = next;
            unlockTween?.kill();

            const panel = panels[next];
            const targetTop = idealTop(panel);
            const smoother = ScrollSmoother.get();

            // Instant lock to height — no settle wait, no long smooth lag.
            if (smoother) {
              smoother.scrollTo(panel, false, `top ${targetTop}px`);
            } else {
              const top =
                window.scrollY + panel.getBoundingClientRect().top - targetTop;
              window.scrollTo({ top, behavior: "auto" });
            }

            // Brief lock so one wheel burst doesn't skip panels.
            unlockTween = gsap.delayedCall(0.35, () => {
              animating = false;
            });
          };

          const step = (direction: 1 | -1) => {
            if (!sectionActive || animating) return;
            const base = lockedIndex >= 0 ? lockedIndex : nearestIndex().index;
            const next = base + direction;
            if (next < 0 || next >= panels.length) return;
            goTo(next);
          };

          const onWheel = (event: WheelEvent) => {
            if (!sectionActive) return;
            // Ignore horizontal / tiny trackpad noise.
            if (Math.abs(event.deltaY) < 8) return;
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

            const { index, dist } = nearestIndex();
            const atFirst = index === 0 && event.deltaY < 0 && dist < 48;
            const atLast =
              index === panels.length - 1 && event.deltaY > 0 && dist < 48;

            // Let the page leave the section at the edges.
            if (atFirst || atLast) return;

            event.preventDefault();
            event.stopPropagation();
            step(event.deltaY > 0 ? 1 : -1);
          };

          const onTouchStart = (event: TouchEvent) => {
            if (!sectionActive || !event.touches[0]) return;
            touchY = event.touches[0].clientY;
          };

          const onTouchEnd = (event: TouchEvent) => {
            if (!sectionActive || !event.changedTouches[0]) return;
            const dy = touchY - event.changedTouches[0].clientY;
            if (Math.abs(dy) < 40) return;

            const { index, dist } = nearestIndex();
            const atFirst = index === 0 && dy < 0 && dist < 48;
            const atLast = index === panels.length - 1 && dy > 0 && dist < 48;
            if (atFirst || atLast) return;

            step(dy > 0 ? 1 : -1);
          };

          // Capture before ScrollSmoother so one gesture = one panel.
          window.addEventListener("wheel", onWheel, {
            passive: false,
            capture: true,
          });
          window.addEventListener("touchstart", onTouchStart, {
            passive: true,
          });
          window.addEventListener("touchend", onTouchEnd, { passive: true });

          ScrollTrigger.create({
            trigger: panelsEl,
            start: () => `top ${idealTop(panels[0])}px`,
            end: () => {
              const last = panels[panels.length - 1];
              return `bottom ${window.innerHeight - idealTop(last)}px`;
            },
            invalidateOnRefresh: true,
            onEnter: () => {
              sectionActive = true;
              lockedIndex = nearestIndex().index;
              goTo(lockedIndex);
            },
            onEnterBack: () => {
              sectionActive = true;
              lockedIndex = nearestIndex().index;
              goTo(lockedIndex);
            },
            onLeave: () => {
              sectionActive = false;
              lockedIndex = -1;
              unlockTween?.kill();
            },
            onLeaveBack: () => {
              sectionActive = false;
              lockedIndex = -1;
              unlockTween?.kill();
            },
            onUpdate: () => {
              // Fallback for scrollbar / smoother drag: snap immediately.
              if (!sectionActive || animating) return;
              const { index, dist } = nearestIndex();
              if (dist < 10) {
                lockedIndex = index;
                return;
              }
              goTo(index);
            },
          });

          removeSnapListeners = () => {
            window.removeEventListener("wheel", onWheel, true);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
          };
        }

        // Background plane: slower parallax + zoom scrubbed to each panel.
        panels.forEach((panel) => {
          const bg = panel.querySelector<HTMLElement>("[data-method-bg]");
          if (!bg) return;

          gsap.fromTo(
            bg,
            { yPercent: -14, scale: 1.1 },
            {
              yPercent: 14,
              scale: 3,
              ease: "easeInOut",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.75,
              },
            },
          );
        });

        slides.forEach((slide) => {
          const title = slide.querySelector<HTMLElement>("[data-method-title]");
          const body = slide.querySelector<HTMLElement>("[data-method-body]");

          const scrollTrigger = {
            trigger: slide,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse" as const,
          };

          if (title) {
            // Perspective on the title so rotationX reads in 3D.
            gsap.set(title, { perspective: 400 });

            SplitText.create(title, {
              type: "lines",
              autoSplit: true,
              onSplit(self) {
                self.lines.forEach((line) => {
                  // SplitText often leaves trailing whitespace that
                  // inflates the highlight past the last character.
                  line.innerHTML = line.innerHTML
                    .replace(/(&nbsp;|\s)+$/gi, "")
                    .replace(/^(&nbsp;|\s)+/gi, "");

                  // Highlight only the text box — never full container width.
                  gsap.set(line, {
                    display: "block",
                    width: "fit-content",
                    maxWidth: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 0.82,
                    paddingTop: "0.06em",
                    paddingBottom: "0.18em",
                    paddingLeft: "0.2em",
                    paddingRight: "0.2em",
                    backgroundColor: "var(--surface)",
                  });
                });

                const tl = gsap.timeline({
                  scrollTrigger: { ...scrollTrigger },
                });

                tl.from(self.lines, {
                  rotationX: -100,
                  transformOrigin: "50% 50% -160px",
                  opacity: 0,
                  duration: 0.8,
                  ease: "power3",
                  stagger: 0.25,
                });

                if (body) {
                  tl.fromTo(
                    body,
                    { y: 48, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.6,
                      ease: "power3.out",
                    },
                  );
                }

                return tl;
              },
            });
          } else if (body) {
            gsap.fromTo(
              body,
              { y: 48, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: { ...scrollTrigger },
              },
            );
          }
        });
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      removeSnapListeners?.();
      ctx?.revert();
    };
  }, [cards.length]);

  if (!cards.length) return null;

  return (
    <section ref={rootRef} className="overflow-x-clip bg-surface">
      <div className="mx-auto max-w-[1200px] pt-14 pb-14 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24">
        <div className="flex flex-col items-center px-5 text-center sm:px-6 md:px-0">
          {section.eyebrow ? (
            <SectionEyebrow
              colorClass={colors.eyebrow}
              className="justify-center"
            >
              {section.eyebrow}
            </SectionEyebrow>
          ) : null}
          {section.title ? (
            <h2
              className={`w-full max-w-[36rem] text-balance font-serif font-normal ${titleSize} ${colors.title}`}
            >
              {section.title.split("\n").map((line, index, lines) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
          ) : null}
        </div>

        <div
          data-method-panels
          className="mt-10 flex flex-col items-stretch gap-10 px-5 sm:px-6 md:mt-14 md:gap-14 md:px-0"
        >
          {cards.map((card, index) => (
            <article
              key={card.title}
              data-method-panel
              className="relative box-border flex h-[calc(82dvh-var(--site-header-height,6.5rem))] w-full shrink-0 flex-col items-center justify-center overflow-hidden px-5 py-14 text-center md:px-8 md:py-16"
            >
              <div
                aria-hidden
                data-method-bg
                className="pointer-events-none absolute inset-[-18%] bg-cover bg-center bg-no-repeat will-change-transform"
                style={{
                  backgroundImage: `url(/vector_${(index % 4) + 1}.svg)`,
                }}
              />
              <div
                data-method-slide
                className="relative z-1 mx-auto flex w-full max-w-[44rem] flex-col items-center gap-5 text-center md:gap-6"
              >
                <h3
                  className={`w-full text-center font-serif text-[48px] leading-[0.82] font-light tracking-[-0.025em] sm:text-[64px] md:text-[88px] lg:text-[104px] ${colors.itemTitle}`}
                >
                  <span data-method-title className="leading-[0.82]">
                    {card.title}
                  </span>
                </h3>
                {card.body ? (
                  <div
                    data-method-body
                    className="w-full max-w-[40rem] bg-surface p-4 opacity-0 will-change-transform md:p-5"
                  >
                    <p
                      className={`text-center font-serif text-[18px] leading-[1.55] sm:text-[19px] md:text-[21px] ${colors.itemBody}`}
                    >
                      {withEmphasis(card.body)}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
