# Clubhaus Digital Proposals

A reusable, data-driven proposal template. Each client proposal is a single typed
data file rendered through shared section components. Built with Next.js 16,
React 19, Tailwind CSS v4, and GSAP. Deploys to Vercel as-is.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the proposal index, or
go straight to a proposal, e.g. `/twisted-pin`.

## Add a new client proposal

1. Copy `data/clients/twisted-pin.ts` to `data/clients/<client>.ts`
2. Update the content — the `Proposal` type in `types/proposal.ts` guides every field
3. Register it in `data/registry.ts` (one import + one array entry)
4. The proposal is live at `/<slug>`

Notes:

- `brand` and `website` sections are optional — omit them for proposals that
  don't include that work.
- `pricing.options` supports 1 to 3 options; set `highlighted: true` on the one
  you want to feature with a "Recommended" badge.
- `client.accentColor` (and optional `accentColorSecondary`) tint the entire
  proposal per client.

## Structure

- `types/proposal.ts` — the `Proposal` data model
- `data/clients/` — one file per client proposal
- `data/registry.ts` — list of live proposals
- `components/sections/` — Cover, Brief, BrandGuidelines, WebsitePages, Timeline, Pricing, Agreement
- `components/ProposalLayout.tsx` — section ordering, running footer, accent theming
- `app/[slug]/page.tsx` — dynamic proposal route (statically generated)

## Deploy

Push to a Git repo and import into Vercel — no configuration needed.
