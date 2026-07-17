import type { BriefSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";

export default function Brief({ brief }: { brief: BriefSection }) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Client <span className="accent-text">Brief</span>
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          {brief.overview}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-borderline bg-surface p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Problem Statement
            </p>
            <p className="mt-4 font-medium leading-relaxed text-foreground/90">
              {brief.problem}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="h-full rounded-2xl border border-borderline bg-surface p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Solution
            </p>
            <p className="mt-4 font-medium leading-relaxed text-foreground/90">
              {brief.solution}
            </p>
          </div>
        </Reveal>
      </div>

      {brief.strategyPoints.length > 0 && (
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {brief.strategyPoints.map((point, i) => (
            <Reveal key={point.title} delay={0.1 + i * 0.05}>
              <div className="h-full rounded-2xl border border-borderline bg-surface-raised p-6">
                <p className="font-display text-2xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
