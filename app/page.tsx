import type { Metadata } from "next";
import { adsOnBoards } from "@/data/clients/ads-on-boards";
import ProposalLayout from "@/components/ProposalLayout";

export const metadata: Metadata = {
  title: `${adsOnBoards.client.name} ${adsOnBoards.client.proposalTitle}`,
  description: `${adsOnBoards.client.proposalTitle} for ${adsOnBoards.client.name}.`,
};

export default function Home() {
  return <ProposalLayout proposal={adsOnBoards} />;
}
