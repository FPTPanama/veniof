"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Locale } from "@/content";
import { RecycleScrollSpin } from "./home/RecycleScrollSpin";

const copy = {
  en: {
    ariaLabel:
      "Line drawing of a suspension bridge joining the United States and Venezuela",
    leftTitle: "United States",
    leftSub: "Capital, governance and compliance",
    rightTitle: "Venezuela",
    rightSub: "Operations, relationships and execution",
  },
  es: {
    ariaLabel:
      "Dibujo lineal de un puente colgante que une a Estados Unidos y Venezuela",
    leftTitle: "Estados Unidos",
    leftSub: "Capital, gobernanza y cumplimiento",
    rightTitle: "Venezuela",
    rightSub: "Operaciones, relaciones y ejecución",
  },
} as const;

type Props = {
  locale?: Locale;
};

const TRUCKS = [
  {
    src: "/camion_01.svg",
    direction: "ltr" as const,
    duration: "26s",
    delay: "0s",
    widthClass: "w-[8.5%]",
  },
  {
    src: "/camion_02.svg",
    direction: "rtl" as const,
    duration: "32s",
    delay: "7s",
    widthClass: "w-[10%]",
  },
  {
    src: "/camion_03.svg",
    direction: "ltr" as const,
    duration: "22s",
    delay: "14s",
    widthClass: "w-[9%]",
  },
];

/** Vertical posts along the deck railing (skip tower footprints). */
const RAIL_POSTS = Array.from({ length: 41 }, (_, i) => 15 + i * 30).filter(
  (x) => (x < 255 || x > 285) && (x < 915 || x > 945),
);

export function BridgeGraphic({ locale = "en" }: Props) {
  const t = copy[locale];
  const rootRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cloud = cloudRef.current;
    if (!root || !cloud) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

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
          smoother.effects(cloud, { speed: 0.8 });
        } else {
          gsap.to(cloud, {
            y: 48,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, root);
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative mt-16 md:mt-20">
      <div className="relative z-0">
      {/* Sky room above the bridge */}
      <div className="pointer-events-none relative z-0 h-[clamp(8rem,22vw,13rem)] md:h-52" />
      <div className="relative z-[2] -mt-[min(4.5rem,12vw)] overflow-hidden [container-type:inline-size] md:-mt-16">
        <RecycleScrollSpin />
        {/* Mask: hide recycle below the deck */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-surface"
          style={{ top: "calc(218 / 300 * 100%)" }}
        />
        <svg
          viewBox="0 0 1200 300"
          className="relative z-[2] block h-auto w-full overflow-visible"
          role="img"
          aria-label={t.ariaLabel}
          xmlns="http://www.w3.org/2000/svg"
        >
      <line x1="300" x2="300" y1="67.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="330" x2="330" y1="92.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="360" x2="360" y1="114.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="390" x2="390" y1="134.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="420" x2="420" y1="151.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="450" x2="450" y1="165.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="480" x2="480" y1="177.1" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="510" x2="510" y1="186.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="540" x2="540" y1="192.8" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="570" x2="570" y1="196.7" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="600" x2="600" y1="198.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="630" x2="630" y1="196.7" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="660" x2="660" y1="192.8" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="690" x2="690" y1="186.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="720" x2="720" y1="177.1" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="750" x2="750" y1="165.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="780" x2="780" y1="151.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="810" x2="810" y1="134.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="840" x2="840" y1="114.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="870" x2="870" y1="92.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="900" x2="900" y1="67.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="60" x2="60" y1="188.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1140" x2="1140" y1="188.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="90" x2="90" y1="171.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1110" x2="1110" y1="171.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="120" x2="120" y1="153.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1080" x2="1080" y1="153.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="150" x2="150" y1="134.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1050" x2="1050" y1="134.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="180" x2="180" y1="113.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1020" x2="1020" y1="113.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="210" x2="210" y1="90.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="990" x2="990" y1="90.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="240" x2="240" y1="66.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="960" x2="960" y1="66.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <path d="M0,218 Q150,150 270,40" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M270,40 Q600,356 930,40" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M930,40 Q1050,150 1200,218" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {/* Deck / piso */}
      <rect x="0" y="218" width="1200" height="8" fill="#0A1A2F" opacity="0.92" />
      {/* Rail / baranda */}
      <g opacity="0.75" stroke="#0A1A2F" strokeWidth="1.1" fill="none" vectorEffect="non-scaling-stroke">
        <line x1="0" x2="1200" y1="208" y2="208" />
        <line x1="0" x2="1200" y1="213" y2="213" opacity="0.7" />
        {RAIL_POSTS.map((x) => (
          <line key={x} x1={x} x2={x} y1={208} y2={218} />
        ))}
      </g>
      {/* Main towers — extended past the deck; ends fade via bottom gradient */}
      <rect x="263" y="18" width="14" height="290" fill="#0A1A2F" opacity="0.95" />
      <line x1="263" x2="277" y1="120" y2="120" fill="none" stroke="#eef0f3" strokeWidth="1.2" opacity="0.35" vectorEffect="non-scaling-stroke" />
      <rect x="923" y="18" width="14" height="290" fill="#0A1A2F" opacity="0.95" />
      <line x1="923" x2="937" y1="120" y2="120" fill="none" stroke="#eef0f3" strokeWidth="1.2" opacity="0.35" vectorEffect="non-scaling-stroke" />
        </svg>

        <div aria-hidden>
          {TRUCKS.map((truck) => (
            <div
              key={truck.src}
              className={`bridge-truck ${truck.direction === "ltr" ? "bridge-truck-ltr" : "bridge-truck-rtl"} ${truck.widthClass}`}
              style={{
                animationDuration: truck.duration,
                animationDelay: truck.delay,
              }}
            >
              {/* Decorative motion asset; next/image unnecessary for tiny looping SVGs. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={truck.src} alt="" />
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[22%] bg-gradient-to-r from-surface via-surface/80 to-transparent sm:w-[18%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[22%] bg-gradient-to-l from-surface via-surface/80 to-transparent sm:w-[18%]"
        />
      </div>

      {/* Soft bottom fade over pillars only — cloud sits above this. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[18%] bg-gradient-to-t from-surface from-[20%] via-surface/70 via-[55%] to-transparent"
      />

      <div
        ref={cloudRef}
        aria-hidden
        data-speed="0.8"
        className="bridge-cloud pointer-events-none absolute top-[6%] left-[36%] z-30 w-[62%] max-w-xl will-change-transform sm:left-[40%] sm:w-[54%] md:max-w-2xl"
      >
        <Image
          src="/nube.webp"
          alt=""
          width={900}
          height={420}
          className="h-auto w-full select-none"
          sizes="(max-width: 768px) 70vw, 560px"
          priority={false}
        />
      </div>
      </div>

      <div className="relative z-[2] mt-5 grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="text-left">
          <h3 className="font-serif text-2xl text-ink md:text-4xl">
            <span className="bg-surface box-decoration-clone px-[0.12em] [box-decoration-break:clone]">
              {t.leftTitle}
            </span>
          </h3>
          <p className="mt-1.5 text-[15px] leading-snug text-muted">
            <span className="bg-surface box-decoration-clone px-[0.15em] [box-decoration-break:clone]">
              {t.leftSub}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2.5" aria-hidden>
          <span className="h-[11px] w-px shrink-0 bg-navy" />
          {/* US — red / white / blue */}
          <span
            className="h-[2px] min-w-0 flex-1"
            style={{
              background:
                "linear-gradient(to right, #b22234 0% 33.33%, #eef0f3 33.33% 66.66%, #0a1a2f 66.66% 100%)",
            }}
          />
          {/* Venezuela — yellow / blue / red */}
          <span
            className="h-[2px] min-w-0 flex-1"
            style={{
              background:
                "linear-gradient(to right, #f7d117 0% 33.33%, #0037a2 33.33% 66.66%, #cf142b 66.66% 100%)",
            }}
          />
          <span className="h-[11px] w-px shrink-0 bg-navy" />
        </div>

        <div className="text-left md:text-right">
          <h3 className="font-serif text-2xl text-ink md:text-4xl">
            <span className="bg-surface box-decoration-clone px-[0.12em] [box-decoration-break:clone]">
              {t.rightTitle}
            </span>
          </h3>
          <p className="mt-1.5 text-[15px] leading-snug text-muted">
            <span className="bg-surface box-decoration-clone px-[0.15em] [box-decoration-break:clone]">
              {t.rightSub}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
