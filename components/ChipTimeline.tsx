"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TimelinePhase } from "@/types/proposal";

gsap.registerPlugin(ScrollTrigger);

/** Matches the Tailwind `top-8` offset the track starts from. */
const TRACK_TOP_OFFSET = 32;

/**
 * Vertical timeline: a chip marker per phase, connected by a line that
 * draws itself downward as the user scrolls.
 */
export default function ChipTimeline({ phases }: { phases: TimelinePhase[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const line = lineRef.current;
    if (!container || !track || !line) return;

    // Stop the rail at the center of the last chip instead of the bottom
    // of the container, so it doesn't trail past the final timeline item.
    const sizeTrack = () => {
      const chips = container.querySelectorAll<HTMLElement>("[data-chip]");
      const lastChip = chips[chips.length - 1];
      if (!lastChip) return;
      const containerTop = container.getBoundingClientRect().top;
      const chipRect = lastChip.getBoundingClientRect();
      const chipCenter = chipRect.top - containerTop + chipRect.height / 2;
      const height = Math.max(chipCenter - TRACK_TOP_OFFSET, 0);
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

      container.querySelectorAll("[data-chip]").forEach((chip) => {
        gsap.fromTo(
          chip,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: chip,
              start: "top 70%",
              once: true,
            },
          }
        );
      });

      container.querySelectorAll("[data-phase]").forEach((phase) => {
        gsap.fromTo(
          phase,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: phase,
              start: "top 75%",
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
    <div ref={containerRef} className="relative mt-12">
      {/* Track + animated line, centered on the chips */}
      <div
        ref={trackRef}
        className="absolute left-[22px] top-8 w-px bg-borderline sm:left-[26px]"
      />
      <div
        ref={lineRef}
        className="absolute left-[21px] top-8 w-[3px] rounded-full sm:left-[25px]"
        style={{
          background:
            "linear-gradient(180deg, var(--accent), var(--accent-secondary))",
          transform: "scaleY(0)",
        }}
      />

      <div className="space-y-14">
        {phases.map((phase, i) => (
          <div key={phase.title} className="relative flex gap-6 sm:gap-8">
            <div
              data-chip
              className="relative z-10 mt-0.5 h-11 w-11 shrink-0 rounded-full bg-background p-0.5 shadow-[0_0_0_3px_var(--background)] sm:h-[52px] sm:w-[52px]"
              style={{ opacity: 0 }}
            >
              <Image
                src="/brand/chip-plain.png"
                alt=""
                width={52}
                height={52}
                className="h-full w-full"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-sm font-bold text-white sm:text-base">
                {i + 1}
              </span>
            </div>

            <div data-phase className="min-w-0 pt-1" style={{ opacity: 0 }}>
              <h3 className="font-display text-lg font-bold sm:text-xl">
                {phase.title}{" "}
                <span className="whitespace-nowrap font-sans text-sm font-normal text-muted">
                  ({phase.duration}, {phase.hours})
                </span>
              </h3>

              {phase.objective && (
                <p className="mt-3 leading-relaxed text-muted">
                  <strong className="font-semibold text-foreground">
                    Objective:
                  </strong>{" "}
                  {phase.objective}
                </p>
              )}

              {phase.description && (
                <p className="mt-3 leading-relaxed text-muted">
                  {phase.description}
                </p>
              )}

              {phase.items && phase.items.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {phase.items.map((item) => (
                    <li
                      key={item.title}
                      className="text-sm leading-relaxed text-muted sm:text-base"
                    >
                      <span className="accent-text">&bull;</span>{" "}
                      <strong className="font-semibold text-foreground">
                        {item.title}:
                      </strong>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
