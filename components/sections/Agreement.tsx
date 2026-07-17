import type { AgreementSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";

export default function Agreement({ agreement }: { agreement: AgreementSection }) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {agreement.heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="accent-text">
            {agreement.heading.split(" ").slice(-1)}
          </span>
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          {agreement.preamble}
        </p>
      </Reveal>

      <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
        {agreement.terms.map((term, i) => (
          <div key={term.title} className="mb-6 break-inside-avoid">
            <Reveal delay={0.04 * i}>
              <div className="rounded-xl border border-borderline bg-surface p-6">
                <h3 className="text-sm font-semibold text-accent">
                  {term.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {term.body}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          {agreement.closing}
        </p>
      </Reveal>

      {agreement.signatories.length > 0 && (
        <Reveal delay={0.15}>
          <div
            className={`mt-14 grid gap-8 ${
              agreement.signatories.length > 2
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2"
            }`}
          >
            {agreement.signatories.map((signatory) => (
              <div key={signatory.company} className="border-t border-borderline pt-6">
                <div className="h-10" />
                <p className="border-t border-dashed border-borderline pt-3 font-display font-semibold">
                  {signatory.name}
                </p>
                <p className="text-sm text-muted">{signatory.company}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
                  Signature / Date
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
