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

/** Matches the Tailwind `top-4` offset the track starts from. */
const TRACK_TOP_OFFSET = 16;

export default function WebsitePages({ website }: { website: WebsiteSection }) {
  const pagesRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = pagesRef.current;
    const track = trackRef.current;
    const line = lineRef.current;
    if (!container || !track || !line) return;

    // Stop the rail at the center of the last marker instead of the bottom
    // of the container, so it doesn't trail past the final page item.
    const sizeTrack = () => {
      const markers = container.querySelectorAll<HTMLElement>(
        "[data-page-marker]"
      );
      const lastMarker = markers[markers.length - 1];
      if (!lastMarker) return;
      const containerTop = container.getBoundingClientRect().top;
      const markerRect = lastMarker.getBoundingClientRect();
      const markerCenter =
        markerRect.top - containerTop + markerRect.height / 2;
      const height = Math.max(markerCenter - TRACK_TOP_OFFSET, 0);
      track.style.height = `${height}px`;
      line.style.height = `${height}px`;
    };

    sizeTrack();
    window.addEventListener("resize", sizeTrack);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.5,
          },
        }
      );

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

    return () => {
      window.removeEventListener("resize", sizeTrack);
      ctx.revert();
    };
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
        {/* Track + animated line, centered on the plane cards */}
        <div
          ref={trackRef}
          className="absolute left-[1.9rem] top-4 w-px bg-borderline sm:left-[2.35rem]"
        />
        <div
          ref={lineRef}
          className="absolute left-[calc(1.9rem-1px)] top-4 w-[3px] rounded-full sm:left-[calc(2.35rem-1px)]"
          style={{
            background:
              "linear-gradient(180deg, var(--accent), var(--accent-secondary))",
            transform: "scaleY(0)",
          }}
        />

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
