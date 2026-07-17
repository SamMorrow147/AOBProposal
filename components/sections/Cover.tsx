import Image from "next/image";
import type { Proposal } from "@/types/proposal";
import Reveal from "@/components/Reveal";

export default function Cover({ proposal }: { proposal: Proposal }) {
  return (
    <div className="relative">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <Image
            src={proposal.client.brandLogo?.src ?? "/brand/clubhaus-chip.png"}
            alt={proposal.client.brandLogo?.alt ?? "Clubhaus Agency"}
            width={96}
            height={48}
            className="h-11 w-auto"
          />
          {proposal.client.partnerLogos?.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={56}
              className="h-10 w-auto"
            />
          ))}
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Powered by {proposal.client.poweredBy ?? "Clubhaus Agency"}
          </p>
        </div>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {proposal.client.name}
          <br />
          <span className="accent-text">{proposal.client.proposalTitle}</span>
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
          {proposal.intro.opening}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <Reveal delay={0.15}>
          <h2 className="font-display text-xl font-semibold">Our Approach</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {proposal.intro.approach}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-display text-xl font-semibold">
            What You Can Expect
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            {proposal.intro.whatToExpect}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <h2 className="mt-20 font-display text-xl font-semibold">
          On Deck For This Project
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {proposal.team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-borderline bg-surface p-6"
            >
              <p className="font-display text-lg font-semibold">{member.name}</p>
              <div className="mt-4 space-y-1 text-sm text-muted">
                <p>{member.email}</p>
                <p>{member.phone}</p>
                {member.website && <p>{member.website}</p>}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
