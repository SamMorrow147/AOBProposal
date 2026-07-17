export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  website?: string;
  /** Path under /public to an animated character gif shown beside the member's name */
  character?: string;
}

export interface ClientInfo {
  name: string;
  /** e.g. "Brand & Web Proposal" — used in titles and the running footer */
  proposalTitle: string;
  /** Cover byline, defaults to "Clubhaus Agency" — use for co-branded proposals, e.g. "Clubhaus Agency × GA Consulting" */
  poweredBy?: string;
  /** Primary "Powered by" logo on the cover. Defaults to the Clubhaus chip. */
  brandLogo?: { src: string; alt: string };
  /** Partner logos (paths under /public) shown next to the primary logo on the cover */
  partnerLogos?: { src: string; alt: string }[];
  /** Hide the logo in the sticky top nav (client name still shows) */
  hideNavLogo?: boolean;
  /** Hex color used to tint the proposal per client */
  accentColor: string;
  /** Optional secondary accent for gradients */
  accentColorSecondary?: string;
  /** Optional path under /public to the client logo */
  logo?: string;
}

export interface IntroSection {
  /** Large opening line on the cover */
  headline: string;
  opening: string;
  approach: string;
  whatToExpect: string;
}

export interface StrategyPoint {
  title: string;
  description: string;
}

export interface BriefSection {
  overview: string;
  problem: string;
  solution: string;
  strategyPoints: StrategyPoint[];
}

export interface BrandItem {
  title: string;
  description: string;
}

export interface BrandGroup {
  title: string;
  items: BrandItem[];
}

export interface BrandSection {
  heading: string;
  intro: string;
  groups: BrandGroup[];
  /** Closing note, e.g. asset delivery details */
  note?: string;
  /** Optional call-to-action link rendered under the closing note */
  noteLink?: {
    label: string;
    href: string;
  };
  /** Label above the closing note, defaults to "Note" */
  noteLabel?: string;
}

export interface SitePage {
  name: string;
  description: string;
  /** When true, renders a stack of three plane-cards to signal multiple pages */
  multiPage?: boolean;
}

export interface WebsiteSection {
  heading: string;
  /** e.g. "12-20 Total Core Pages" */
  scopeLabel: string;
  pages: SitePage[];
  note?: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface TimelinePhase {
  title: string;
  duration: string;
  hours: string;
  /** Paragraph-style summary (Twisted Pin style) */
  description?: string;
  /** "Objective:" line (Mains'l style) */
  objective?: string;
  /** Bulleted deliverables with bold labels (Mains'l style) */
  items?: TimelineItem[];
}

export interface Milestone {
  label: string;
  date: string;
  /** 0-1 position along the timeline bar */
  position: number;
}

export interface TimelineSection {
  heading: string;
  phases: TimelinePhase[];
  milestones: Milestone[];
  totalDuration: string;
  totalHours: string;
}

export interface PricingStat {
  label: string;
  value: string;
  /** Visually emphasize this stat (e.g. total cost) */
  emphasize?: boolean;
}

export interface PricingOption {
  /** e.g. "Option 1" */
  label: string;
  name: string;
  /** e.g. "$125 per hr" */
  rate: string;
  description: string;
  stats: PricingStat[];
  highlighted?: boolean;
}

export interface PricingSection {
  heading: string;
  intro: string;
  /** 1 to 3 options */
  options: PricingOption[];
  footnote?: string;
}

export interface AgreementTerm {
  title: string;
  body: string;
}

export interface Signatory {
  name: string;
  company: string;
}

export interface AgreementSection {
  heading: string;
  preamble: string;
  terms: AgreementTerm[];
  closing: string;
  signatories: Signatory[];
}

export interface Proposal {
  slug: string;
  client: ClientInfo;
  /** Team members shown in "On Deck For This Project" */
  team: TeamMember[];
  intro: IntroSection;
  brief: BriefSection;
  brand?: BrandSection;
  website?: WebsiteSection;
  timeline: TimelineSection;
  pricing: PricingSection;
  agreement: AgreementSection;
}
