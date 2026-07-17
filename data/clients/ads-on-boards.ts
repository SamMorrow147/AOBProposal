import type { Proposal } from "@/types/proposal";

export const adsOnBoards: Proposal = {
  slug: "ads-on-boards",
  client: {
    name: "Ads On Boards USA",
    proposalTitle: "Website Rebuild Proposal",
    poweredBy: "GAC and Clubhaus",
    brandLogo: { src: "/brand/ga-consulting.png", alt: "GA Consulting" },
    partnerLogos: [{ src: "/brand/clubhaus-icon.png", alt: "Clubhaus Agency" }],
    hideNavLogo: true,
    accentColor: "#329ec7",
    accentColorSecondary: "#293a8d",
  },
  team: [
    {
      name: "Mark Fischer Jr.",
      role: "",
      email: "Mark@GAC-MN.com",
      phone: "651 338 2633",
      website: "GAC-MN.com",
      character: "/animations/drawing-guy.gif",
    },
    {
      name: "Sam Morrow",
      role: "",
      email: "Sam@ClubHausAgency.com",
      phone: "320 219 8802",
      website: "ClubHausAgency.com",
      character: "/animations/painting-guy.gif",
    },
    {
      name: "Noah Morrow",
      role: "",
      email: "Noah@ClubHausAgency.com",
      phone: "320 405 4425",
      website: "ClubHausAgency.com",
      character: "/animations/computer-guy.gif",
    },
    {
      name: "Darby Shaw",
      role: "",
      email: "Darby@ClubHausAgency.com",
      phone: "408 603 0916",
      website: "ClubHausAgency.com",
      character: "/animations/social-media-girl.gif",
    },
  ],
  intro: {
    headline: "Website Rebuild",
    opening:
      "This project is a team effort between GA Consulting and Clubhaus Agency. GAC handles the business and strategy side; Clubhaus designs and builds the website. You get both in one place \u2014 people who understand your business and people who can build a site that actually works for it.",
    approach:
      "We keep it simple: figure out what your customers need, then build a site that gets them there. GAC brings the business thinking; Clubhaus brings the design and development. The result is a site that looks great, loads fast, and makes it easy to book a cleaning or buy a product \u2014 no guesswork for the people using it.",
    whatToExpect:
      "The pages ahead lay out exactly what we\u2019ll do, how long it\u2019ll take, and what it costs. No surprises and no filler \u2014 just a clear plan for rebuilding the AOB site and the ongoing support to keep it running after launch.",
  },
  brief: {
    overview:
      "AOB works with hockey rink managers and hockey associations across the country \u2014 cleaning dasher boards and glass with a patented cleaning system, and selling dasher board ads, step ads, blue and red line ads, glass ads, and hockey coaching and rink cleaning products. The current site runs on WordPress + WooCommerce with roughly 22 pages: 7 site pages and a flat shop of 15 products.",
    problem:
      "The current site isn\u2019t working for AOB. The design is clunky and dated, with no real visual hierarchy \u2014 the cleaning service, the shop, and basic company info all compete for attention on the same crowded pages, so visitors aren\u2019t sure where to look or what to do first. Our full crawl of the site surfaced the technical issues behind that experience, from a broken sitemap to a shop that\u2019s hard to browse \u2014 detailed in the Flags below.",
    solution:
      "We\u2019ll redesign and rebuild the AOB site with a modern, hockey-forward look and a clear visual hierarchy so the cleaning service and the shop each get the attention they deserve. The product catalog gets cleaned up and easier to browse, with clearer organization shaped during discovery. The existing scheduling page gets a cleaner booking experience so rink managers can book a board or glass cleaning without friction. Under the hood we fix the foundations: a working XML sitemap, consolidated URLs, a real privacy policy, and on-page SEO so the site actually gets found \u2014 plus a clear path from every page to an order or a booking.",
    strategyPoints: [],
  },
  brand: {
    heading: "Site Audit & Flags",
    intro:
      "We crawled and captured every page of adsonboardsusa.com and built a visual sitemap of the full site \u2014 22 pages, 3 levels deep. These flags shape the rebuild scope.",
    groups: [
      {
        title: "Flags",
        items: [
          {
            title: "Broken XML Sitemap",
            description:
              "The sitemap at /wp-sitemap.xml returns a 500 server error \u2014 search engines can\u2019t reliably index the site. The rebuild ships a clean, automatically generated sitemap.",
          },
          {
            title: "Placeholder Privacy Policy",
            description:
              "The Privacy Policy page still contains unedited WordPress \u201cSuggested text\u201d boilerplate. We\u2019ll replace it with a real policy.",
          },
          {
            title: "Duplicate About Page",
            description:
              "The nav links to /about-us-2/, but a duplicate About page also resolves at /about-us/. We\u2019ll consolidate with a redirect so authority isn\u2019t split between two URLs.",
          },
          {
            title: "Hard-to-Browse Shop",
            description:
              "All 15 products currently live on a single shop page. As part of the rebuild, we\u2019ll tighten how products are presented so buyers can find what they need more easily \u2014 exact organization to be confirmed during discovery.",
          },
          {
            title: "Unclear Calls to Action",
            description:
              "The cleaning service and the product shop compete for attention on one long homepage. The rebuild gives each a clearer pathway with focused calls to action.",
          },
          {
            title: "Cramped on Phones",
            description:
              "Buttons, menus, and product cards feel tight and hard to tap on a phone \u2014 a problem when rink managers are often browsing from the rink, not a desktop.",
          },
          {
            title: "Outdated SEO Signals",
            description:
              "Missing meta descriptions and thin on-page SEO beyond the broken sitemap \u2014 the foundational signals modern search engines expect are largely absent.",
          },
        ],
      },
    ],
    noteLabel: "Visual Sitemap",
    note:
      "The full interactive sitemap \u2014 with screenshots of every page and product, crawled July 16, 2026 \u2014 documents exactly what exists today and what the rebuild covers.",
    noteLink: {
      label: "Open Interactive Sitemap",
      href: "https://aob-scrape.vercel.app/#",
    },
  },
  website: {
    heading: "Primary Website Pages",
    scopeLabel: "\u224822 Pages \u00b7 15 Products",
    pages: [
      {
        name: "Home",
        description:
          "A focused homepage that leads with the patented cleaning service and clear pathways to schedule a cleaning or shop rink products.",
      },
      {
        name: "Schedule a Cleaning",
        description:
          "Rebuilt booking page for dasher board and glass cleaning \u2014 clearer flow and stronger calls to action, built for rink managers prepping for tournaments.",
      },
      {
        name: "Shop",
        description:
          "Cleaner product catalog that\u2019s easier to browse \u2014 organization refined with you during discovery rather than locked in up front.",
      },
      {
        name: "Product Pages (15)",
        description:
          "All 15 existing products migrated with specs, variants, and pricing as confirmed with your team. We can also shoot fresh product photography for any items that need a refresh.",
        multiPage: true,
      },
      {
        name: "About Us",
        description:
          "Consolidated single About page telling the company story and Myron\u2019s background \u2014 with the duplicate URL redirected.",
      },
      {
        name: "Contact Us",
        description:
          "Contact form, address, and phone \u2014 with clear links to scheduling and the shop so no inquiry dead-ends.",
      },
      {
        name: "Cart & Checkout",
        description:
          "Streamlined e-commerce checkout flow for product orders, carried over and cleaned up.",
      },
      {
        name: "Privacy Policy",
        description:
          "A real privacy policy replacing the WordPress placeholder text.",
      },
    ],
    note:
      "The site will be rebuilt responsively with clean SEO fundamentals \u2014 working sitemap, proper metadata, and fast load times on every device.",
  },
  timeline: {
    heading: "Project Timeline & Milestones",
    phases: [
      {
        title: "Discovery & Kickoff",
        duration: "1 week",
        hours: "3\u20134 hrs",
        objective:
          "Confirm scope, gather assets, and finalize the structure using the completed site audit.",
        items: [
          {
            title: "Audit Review",
            description:
              "Walk through the visual sitemap and crawl findings together to confirm what stays, what changes, and what goes.",
          },
          {
            title: "Asset Collection",
            description:
              "Gather product photos, pricing confirmations, logos, and existing copy.",
          },
          {
            title: "Platform Setup",
            description:
              "Configure the development environment, hosting, and e-commerce foundation.",
          },
        ],
      },
      {
        title: "Design",
        duration: "1.5 weeks",
        hours: "8\u201310 hrs",
        objective:
          "A clean, hockey-forward design that puts the cleaning service and shop front and center.",
        items: [
          {
            title: "Homepage & Key Pages",
            description:
              "High-fidelity mockups for the homepage, scheduling page, shop, and a product page template.",
          },
          {
            title: "Responsive Layouts",
            description:
              "Optimized for desktop, tablet, and mobile \u2014 rink managers are often on their phones at the arena.",
          },
          {
            title: "Review & Revisions",
            description: "Design review with your feedback built in.",
          },
        ],
      },
      {
        title: "Content & Structure",
        duration: "2 weeks",
        hours: "15\u201320 hrs",
        objective:
          "Organize the catalog, write the copy, and map every page before design begins.",
        items: [
          {
            title: "Product Organization",
            description:
              "Work with your team to organize the 15 products in a way that makes sense for buyers, and verify specs, variants, and pricing for each.",
          },
          {
            title: "Copywriting",
            description:
              "Clear, sales-focused copy for the homepage, scheduling page, about page, and product descriptions.",
          },
          {
            title: "Scheduling Flow",
            description:
              "Define the booking experience \u2014 what a rink manager fills out, and where the request goes.",
          },
        ],
      },
      {
        title: "Development & E-Commerce",
        duration: "2 weeks",
        hours: "12\u201314 hrs",
        objective:
          "Build the site, migrate the catalog, and wire up scheduling and checkout.",
        items: [
          {
            title: "Site Build",
            description:
              "Convert designs into a fast, responsive site with clean navigation.",
          },
          {
            title: "Product Migration",
            description:
              "Migrate all 15 products with variants, pricing, and photography into the new catalog.",
          },
          {
            title: "Online Scheduling",
            description:
              "Implement the cleaning booking flow with email notifications.",
          },
          {
            title: "SEO Foundations",
            description:
              "Working XML sitemap, redirects for the duplicate About page, metadata, and page-speed optimization.",
          },
        ],
      },
      {
        title: "Testing & QA",
        duration: "1 week",
        hours: "3\u20134 hrs",
        objective:
          "Verify everything works \u2014 orders, bookings, and browsing \u2014 across devices and browsers.",
        items: [
          {
            title: "Checkout Testing",
            description:
              "Full order flow testing across products and variants.",
          },
          {
            title: "Cross-Device Testing",
            description: "Desktop, tablet, and mobile across major browsers.",
          },
          {
            title: "Bug Fixes",
            description: "Address anything identified during testing.",
          },
        ],
      },
      {
        title: "Launch & Support",
        duration: "1 week",
        hours: "2\u20133 hrs",
        objective: "Go live and make sure it stays smooth.",
        items: [
          {
            title: "Launch",
            description:
              "DNS cutover, final checks, and go-live with search engines properly notified.",
          },
          {
            title: "Training",
            description:
              "A walkthrough so you can update products, prices, and content yourself.",
          },
          {
            title: "Post-Launch Monitoring",
            description:
              "Watch performance and fix anything that surfaces in the first weeks.",
          },
        ],
      },
    ],
    milestones: [
      { label: "Start", date: "Week 1", position: 0 },
      { label: "Design", date: "Week 2", position: 0.2 },
      { label: "Development", date: "Week 5", position: 0.55 },
      { label: "Launch", date: "Week 8", position: 1 },
    ],
    totalDuration: "Approximately 8 weeks",
    totalHours: "43\u201354 hours",
  },
  pricing: {
    heading: "Pricing Structure",
    intro:
      "Simple pricing for a right-sized rebuild: a one-time project fee to get the new site live, then a flat $150/month Website Hosting Membership that covers hosting and ongoing care so you never have to think about keeping the site online, secure, or findable.",
    options: [
      {
        label: "One-Time",
        name: "Website Rebuild",
        rate: "$125 per hr",
        description:
          "Design, build, and launch the new AOB site \u2014 product catalog, scheduling, SEO foundations, and training so your team can manage content day-to-day.",
        stats: [
          { label: "Time Est", value: "43\u201354 hrs" },
          { label: "Duration", value: "\u22488 weeks" },
          { label: "Cost Per Agency Hr", value: "$125" },
          {
            label: "Cost Est",
            value: "$5,375 \u2013 $6,750",
            emphasize: true,
          },
          { label: "50% Down Deposit", value: "$3,031.25" },
        ],
      },
      {
        label: "Monthly",
        name: "Website Hosting Membership",
        rate: "$150 / month",
        description:
          "Everything it takes to keep a live website healthy after launch \u2014 hosting, protection, SEO, and hands-on care \u2014 bundled into one flat monthly membership.",
        highlighted: true,
        stats: [
          { label: "Hosting & SSL", value: "Included" },
          { label: "24hr Down Protection", value: "Included" },
          { label: "Uptime Monitoring", value: "Included" },
          { label: "Automated Backups", value: "Included" },
          { label: "Security Updates", value: "Included" },
          { label: "SEO Maintenance", value: "Included" },
          { label: "Domain / DNS Help", value: "Included" },
          { label: "Performance Checkups", value: "Included" },
          { label: "Monthly Cost", value: "$150", emphasize: true },
        ],
      },
    ],
    footnote:
      "Down deposit reflects 50% of median rebuild cost. Membership begins at launch and can be canceled anytime with 30 days\u2019 notice.",
  },
  agreement: {
    heading: "Website Development Agreement",
    preamble:
      "This Website Development Agreement (the \u201cAgreement\u201d) is made effective as of the last date of signature (the \u201cEffective Date\u201d), by and between Ads On Boards USA (the \u201cClient\u201d), and Clubhaus Agency (the \u201cDeveloper\u201d).",
    terms: [
      {
        title: "Scope of Work",
        body:
          "The Developer shall design, develop, and deploy a fully operational website for the Client\u2019s business, as detailed in the attached project proposal \u2014 including the e-commerce catalog, online cleaning scheduling, and SEO foundations mutually agreed upon and documented post the project discovery consultations.",
      },
      {
        title: "Project Timeline",
        body:
          "A comprehensive timeline shall be provided by the Developer, listing critical milestones and expected deliverables. The Client commits to timely provision of necessary assets, content, and approvals to adhere to the agreed-upon schedule. Delays on the part of the Client may necessitate adjustments to the timeline with corresponding implications.",
      },
      {
        title: "Payment Terms",
        body:
          "The Client shall remunerate the Developer as per the fee structure detailed in the project proposal. Payment shall adhere to the terms specified within the proposal, which may outline milestone-based payments or a defined payment schedule. Any late payments may incur additional charges and cause project delays.",
      },
      {
        title: "Intellectual Property",
        body:
          "The Developer acknowledges that all materials provided by the Client for the website are owned by the Client or duly licensed. Full ownership of the website\u2019s final design will transfer to the Client upon completion and final payment, excluding any third-party materials or components not owned by the Developer.",
      },
      {
        title: "Confidentiality",
        body:
          "Both parties agree to maintain confidentiality regarding proprietary information exchanged in the project\u2019s course and not to disclose such information without explicit written consent.",
      },
      {
        title: "Revisions & Change Requests",
        body:
          "The Developer will facilitate review sessions for the Client to provide feedback. Requests for additional features or design changes beyond the initial scope may incur extra costs and/or extend the project timeline.",
      },
      {
        title: "Termination",
        body:
          "This Agreement may be terminated by either party in the instance of a significant breach not remedied within the agreed notice period. Written notice of termination must be furnished in accordance with the terms herein.",
      },
      {
        title: "Dispute Resolution",
        body:
          "The parties will endeavor to settle any disputes through amicable negotiations. Should such negotiations fail, legal recourse may be sought in accordance with the laws of the governing jurisdiction.",
      },
    ],
    closing:
      "Upon executing this agreement, both parties affirm their understanding and acceptance of the terms and conditions set forth within. The Client acknowledges that any modifications to the project\u2019s scope or requests for supplementary services may necessitate revisions to both the timeline and the financial terms of the project, subject to written agreement by the involved parties.",
    signatories: [],
  },
};
