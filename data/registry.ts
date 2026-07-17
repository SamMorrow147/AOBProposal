import type { Proposal } from "@/types/proposal";
import { twistedPin } from "./clients/twisted-pin";
import { mainsl } from "./clients/mainsl";
import { adsOnBoards } from "./clients/ads-on-boards";

/**
 * To add a new proposal:
 * 1. Create a data file in data/clients/ (copy twisted-pin.ts as a starting point)
 * 2. Import it here and add it to the array
 * The proposal will be available at /<slug>
 */
export const proposals: Proposal[] = [twistedPin, mainsl, adsOnBoards];

export function getProposal(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}
