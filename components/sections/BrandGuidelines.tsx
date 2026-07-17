import type { BrandSection } from "@/types/proposal";
import Reveal from "@/components/Reveal";

export default function BrandGuidelines({ brand }: { brand: BrandSection }) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {brand.heading.split("&")[0]}
          {brand.heading.includes("&") && (
            <>
              &amp;
              <span className="accent-text">{brand.heading.split("&")[1]}</span>
            </>
          )}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {brand.intro}
        </p>
      </Reveal>

      <div className="mt-14 space-y-10">
        {brand.groups.map((group, gi) => (
          <Reveal key={group.title} delay={0.05 * gi}>
            <div>
              <h3 className="font-display text-xl font-semibold">
                <span className="mr-3 text-accent">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-borderline bg-surface p-5"
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {brand.note && (
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-borderline bg-surface-raised p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">
              {brand.noteLabel ?? "Note"}
            </p>
            <p className="mt-3 font-medium leading-relaxed text-foreground/90">
              {brand.note}
            </p>
            {brand.noteLink && (
              <a
                href={brand.noteLink.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full border border-borderline px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {brand.noteLink.label}
                <span className="ml-2" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            )}
          </div>
        </Reveal>
      )}
    </div>
  );
}
