import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProposal, proposals } from "@/data/registry";
import ProposalLayout from "@/components/ProposalLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return proposals.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposal(slug);
  if (!proposal) return {};
  return {
    title: `${proposal.client.name} ${proposal.client.proposalTitle} | Clubhaus Agency`,
    description: `${proposal.client.proposalTitle} for ${proposal.client.name}, prepared by Clubhaus Agency.`,
  };
}

export default async function ProposalPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposal(slug);
  if (!proposal) notFound();

  return <ProposalLayout proposal={proposal} />;
}
