"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WebsiteSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

/** Single landscape "plane card" — the visual from the printed proposals. */
function PlaneCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-10 w-14 rounded-lg border-2 border-accent/70 bg-[color-mix(in_srgb,var(--accent)_8%,white)] shadow-sm sm:h-11 sm:w-16 ${className}`}
      aria-hidden="true"
    />
  );
}

/** One card, or a fanned stack of three when the item represents many pages. */
function PageMarker({ multiPage }: { multiPage?: boolean }) {
  if (!multiPage) {
    return (
      <div className="relative flex h-14 w-16 shrink-0 items-center justify-center sm:w-20">
        <PlaneCard />
      </div>
    );
  }

  return (
    <div className="relative flex h-14 w-16 shrink-0 items-center justify-center sm:w-20">
      <PlaneCard className="absolute -rotate-6 translate-y-0.5 opacity-50" />
      <PlaneCard className="absolute rotate-3 -translate-y-0.5 opacity-75" />
      <PlaneCard className="relative z-10" />
    </div>
  );
}

export default function WebsitePages({ website }: { website: WebsiteSection }) {
  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = pagesRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      container.querySelectorAll("[data-page-marker]").forEach((marker) => {
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0, rotate: -8 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: marker,
              start: "top 72%",
              once: true,
            },
          }
        );
      });

      container.querySelectorAll("[data-page-copy]").forEach((copy) => {
        gsap.fromTo(
          copy,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: copy,
              start: "top 76%",
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Primary <span className="accent-text">Website Pages</span>
          </h2>
          <p className="rounded-full border border-borderline bg-surface px-5 py-2 text-sm font-semibold text-accent">
            {website.scopeLabel}
          </p>
        </div>
      </Reveal>

      <div ref={pagesRef} className="relative mt-12">
        {/* Vertical rail connecting the plane cards */}
        <div className="absolute bottom-4 left-[1.9rem] top-4 w-px bg-borderline sm:left-[2.35rem]" />

        <div className="space-y-8">
          {website.pages.map((page) => (
            <div key={page.name} className="relative flex gap-5 sm:gap-6">
              <div
                data-page-marker
                className="relative z-10 bg-background"
                style={{ opacity: 0 }}
              >
                <PageMarker multiPage={page.multiPage} />
              </div>
              <div
                data-page-copy
                className="min-w-0 pt-1"
                style={{ opacity: 0 }}
              >
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  {page.name}
                </h3>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {page.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {website.note && (
        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl text-sm italic text-muted">
            {website.note}
          </p>
        </Reveal>
      )}
    </div>
  );
}
