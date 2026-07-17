import type { PricingSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";

const gridColsByCount: Record<number, string> = {
  1: "lg:grid-cols-1 lg:max-w-xl lg:mx-auto",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
};

export default function Pricing({ pricing }: { pricing: PricingSection }) {
  const gridCols = gridColsByCount[pricing.options.length] ?? "lg:grid-cols-2";

  return (
    <div>
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing <span className="accent-text">Structure</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {pricing.intro}
        </p>
      </Reveal>

      <div className={`mt-14 grid gap-6 ${gridCols}`}>
        {pricing.options.map((option, i) => (
          <Reveal key={option.label} delay={0.1 + i * 0.08}>
            <div
              className={`relative h-full rounded-2xl border p-8 ${
                option.highlighted
                  ? "border-accent/60 bg-surface-raised"
                  : "border-borderline bg-surface"
              }`}
            >
              {option.highlighted ? (
                <span
                  className="absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
                  }}
                >
                  {option.label}
                </span>
              ) : (
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {option.label}
                </p>
              )}
              <h3 className="mt-2 font-display text-2xl font-bold">
                {option.name}
              </h3>
              <p className="mt-1 font-display text-lg font-semibold text-accent">
                {option.rate}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {option.description}
              </p>
              <dl className="mt-6 divide-y divide-borderline border-t border-borderline">
                {option.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-sm text-muted">{stat.label}</dt>
                    <dd
                      className={`text-right text-sm font-semibold ${
                        stat.emphasize ? "text-accent sm:text-base" : ""
                      }`}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      {pricing.footnote && (
        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-sm italic text-muted">
            {pricing.footnote}
          </p>
        </Reveal>
      )}
    </div>
  );
}
