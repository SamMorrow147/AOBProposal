"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Proposal } from "@/types/proposal";
import Cover from "@/components/sections/Cover";
import Brief from "@/components/sections/Brief";
import BrandGuidelines from "@/components/sections/BrandGuidelines";
import WebsitePages from "@/components/sections/WebsitePages";
import Timeline from "@/components/sections/Timeline";
import Pricing from "@/components/sections/Pricing";
import Agreement from "@/components/sections/Agreement";

interface NavSection {
  id: string;
  label: string;
  content: React.ReactNode;
}

function buildSections(proposal: Proposal): NavSection[] {
  const sections: NavSection[] = [
    {
      id: "overview",
      label: "Overview",
      content: <Cover proposal={proposal} />,
    },
    {
      id: "brief",
      label: "Brief",
      content: <Brief brief={proposal.brief} />,
    },
  ];

  if (proposal.brand) {
    sections.push({
      id: "brand",
      label: proposal.brand.heading.includes("Audit")
        ? "Audit"
        : proposal.brand.heading.includes("Accessibility")
          ? "Accessibility"
          : "Brand",
      content: <BrandGuidelines brand={proposal.brand} />,
    });
  }

  if (proposal.website) {
    sections.push({
      id: "pages",
      label: "Pages",
      content: <WebsitePages website={proposal.website} />,
    });
  }

  sections.push(
    {
      id: "timeline",
      label: "Timeline",
      content: <Timeline timeline={proposal.timeline} />,
    },
    {
      id: "pricing",
      label: "Pricing",
      content: <Pricing pricing={proposal.pricing} />,
    },
    {
      id: "agreement",
      label: "Agreement",
      content: <Agreement agreement={proposal.agreement} />,
    }
  );

  return sections;
}

function ProposalNav({
  proposal,
  sections,
}: {
  proposal: Proposal;
  sections: NavSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-40 border-b border-borderline bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3 sm:px-10">
        <a href="#overview" className="flex shrink-0 items-center gap-2">
          {!proposal.client.hideNavLogo && (
            <Image
              src={proposal.client.brandLogo?.src ?? "/brand/clubhaus-chip.png"}
              alt={proposal.client.brandLogo?.alt ?? "Clubhaus Agency"}
              width={64}
              height={28}
              className="h-7 w-auto"
            />
          )}
          <span className="font-display text-sm font-semibold">
            {proposal.client.name}
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeId === section.id
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto rounded-full border border-borderline px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle section navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-borderline px-6 py-3 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeId === section.id
                    ? "bg-accent text-white"
                    : "bg-surface text-muted"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default function ProposalLayout({ proposal }: { proposal: Proposal }) {
  const sections = buildSections(proposal);

  const accentVars = {
    "--accent": proposal.client.accentColor,
    "--accent-secondary":
      proposal.client.accentColorSecondary ?? proposal.client.accentColor,
  } as React.CSSProperties;

  return (
    <div style={accentVars} className="min-h-screen bg-background text-foreground">
      <ProposalNav proposal={proposal} sections={sections} />
      <main>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 border-b border-borderline"
          >
            <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
              {section.content}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-borderline">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 px-6 py-12 sm:gap-14 sm:px-10">
          <a
            href="https://www.clubhausagency.com"
            target="_blank"
            rel="noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
            aria-label="Clubhaus Agency"
          >
            <Image
              src="/brand/clubhaus-chip.png"
              alt="Clubhaus Agency"
              width={56}
              height={56}
              className="h-12 w-12"
            />
          </a>
          <a
            href="https://gac-mn.com/"
            target="_blank"
            rel="noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
            aria-label="GA Consulting"
          >
            <Image
              src="/brand/ga-consulting.png"
              alt="GA Consulting"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
