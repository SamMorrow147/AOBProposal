import Link from "next/link";
import Image from "next/image";
import { proposals } from "@/data/registry";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <Image
        src="/brand/clubhaus-cards.png"
        alt=""
        width={520}
        height={368}
        priority
        className="pointer-events-none absolute -right-24 top-8 hidden w-[480px] opacity-90 lg:block"
      />
      <div className="flex items-center gap-3">
        <Image
          src="/brand/clubhaus-chip.png"
          alt="Clubhaus Agency"
          width={44}
          height={44}
        />
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          Clubhaus Agency
        </p>
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Digital Proposals
      </h1>
      <p className="mt-4 text-muted">
        Active client proposals. Each one lives at its own shareable link.
      </p>

      <ul className="mt-12 space-y-4">
        {proposals.map((proposal) => (
          <li key={proposal.slug}>
            <Link
              href={`/${proposal.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-borderline bg-surface p-6 transition-colors hover:border-accent/50"
              style={
                {
                  "--accent": proposal.client.accentColor,
                } as React.CSSProperties
              }
            >
              <div>
                <p className="font-display text-xl font-semibold">
                  {proposal.client.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {proposal.client.proposalTitle}
                </p>
              </div>
              <span className="text-muted transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
