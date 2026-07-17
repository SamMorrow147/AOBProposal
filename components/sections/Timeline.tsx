import type { TimelineSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";
import ChipTimeline from "@/components/ChipTimeline";

export default function Timeline({ timeline }: { timeline: TimelineSection }) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {timeline.heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {timeline.heading.split(" ").slice(-1)}
          </span>
        </h2>
      </Reveal>

      <ChipTimeline phases={timeline.phases} />

      <Reveal delay={0.05}>
        <div className="mt-6 space-y-1 text-sm font-semibold">
          <p>Total Duration: {timeline.totalDuration}</p>
          <p>Total Estimated Hours: {timeline.totalHours}</p>
        </div>
      </Reveal>
    </div>
  );
}
