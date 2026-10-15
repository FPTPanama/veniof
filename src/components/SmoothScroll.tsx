"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { ScrollSmoother as ScrollSmootherInstance } from "gsap/ScrollSmoother";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

/** Desktop with a real pointer. Phones keep native scroll so Chrome gestures work. */
const DESKTOP_SMOOTH_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function SmoothScroll({ header, children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmootherInstance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const headerEl = wrapper?.querySelector<HTMLElement>("[data-site-header]");
    if (!headerEl) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${headerEl.offsetHeight}px`,
      );
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(headerEl);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    let alive = true;
    let revert: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const mm = gsap.matchMedia();
      mm.add(DESKTOP_SMOOTH_QUERY, () => {
        const headerEl = wrapper.querySelector<HTMLElement>("[data-site-header]");

        const syncOffset = () => {
          content.style.paddingTop = headerEl ? `${headerEl.offsetHeight}px` : "";
        };

        document.documentElement.classList.add("has-smooth-scroll");
        syncOffset();

        const smoother = ScrollSmoother.create({
          wrapper,
          content,
          smooth: 1.2,
          effects: true,
          smoothTouch: false,
        });
        smootherRef.current = smoother;

        const observer = headerEl ? new ResizeObserver(syncOffset) : null;
        if (headerEl) observer?.observe(headerEl);

        const hash = window.location.hash;
        if (hash) {
          const target = document.getElementById(decodeURIComponent(hash.slice(1)));
          if (target) smoother.scrollTo(target, false, "top 120px");
        }

        return () => {
          observer?.disconnect();
          smoother.kill();
          if (smootherRef.current === smoother) smootherRef.current = null;
          content.style.paddingTop = "";
          document.documentElement.classList.remove("has-smooth-scroll");
        };
      });

      revert = () => mm.revert();
    })();

    return () => {
      alive = false;
      revert?.();
    };
  }, []);

  useEffect(() => {
    const smoother = smootherRef.current;
    if (!smoother) return;

    const hash = window.location.hash;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          smoother.scrollTo(target, true, "top 120px");
          return;
        }
      }
      smoother.scrollTo(0, false);
      smoother.refresh();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="flex min-h-full flex-1 flex-col">
      {header}
      <div
        id="smooth-content"
        ref={contentRef}
        className="flex min-h-full flex-1 flex-col"
      >
        {children}
      </div>
    </div>
  );
}
