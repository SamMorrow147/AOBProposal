import type { Proposal } from "@/types/proposal";

export const mainsl: Proposal = {
  slug: "mainsl",
  client: {
    name: "Mains\u2019l",
    proposalTitle: "Website Project Proposal",
    poweredBy: "Clubhaus Agency \u00d7 GA Consulting",
    partnerLogos: [
      { src: "/brand/ga-consulting.png", alt: "GA Consulting" },
    ],
    accentColor: "#329ec7",
    accentColorSecondary: "#293a8d",
  },
  team: [
    {
      name: "Darby Shaw",
      role: "Creative Agency",
      email: "Darby@ClubHausAgency.com",
      phone: "408 603 0916",
      website: "ClubHausAgency.com",
    },
    {
      name: "Noah Morrow",
      role: "Creative Agency",
      email: "Noah@ClubHausAgency.com",
      phone: "320 405 4425",
      website: "ClubHausAgency.com",
    },
    {
      name: "Sam Morrow",
      role: "Creative Agency",
      email: "Sam@ClubHausAgency.com",
      phone: "320 219 8802",
      website: "ClubHausAgency.com",
    },
  ],
  intro: {
    headline: "Website Project",
    opening:
      "At Clubhaus Agency, we specialize in crafting bespoke marketing strategies that resonate with your brand\u2019s unique voice and objectives. Our commitment to excellence and innovation is matched only by our dedication to your success. We understand that in the fast-paced world of digital marketing, the right approach can make all the difference. That\u2019s why we\u2019re here \u2014 to ensure that your brand not only competes but stands out as a leader in its field.",
    approach:
      "At Clubhaus Agency, we believe in a seamless blend of analytics and creativity. Our team is adept at navigating the digital landscape with a keen eye for data-driven results and an artistic touch that engages and captivates. We\u2019re not just marketers; we\u2019re architects of digital experiences that forge lasting relationships between brands and their audiences.",
    whatToExpect:
      "This proposal outlines our comprehensive approach to your project, detailing the services we offer, the strategies we recommend, and the outcomes we anticipate. Our goal is to deliver not just a service, but an experience that reflects the caliber and ethos of both our agency and your brand.",
  },
  brief: {
    overview:
      "Mains\u2019l is a leader in providing innovative supports and services to individuals who need assistance to live independently in their homes and communities. Established in 1989, Mains\u2019l believes in empowering people to make their own life decisions and control their own resources. The organization offers a wide range of services, including self-directed supports, financial management, software services, person-centered planning, training and consultation, and mental and behavioral health services.",
    problem:
      "The current Mains\u2019l website is outdated and doesn\u2019t fully meet the needs of its users or the organization. It lacks a modern design, isn\u2019t easy to use on mobile devices, and often performs slowly. Navigation is difficult, making it hard for users to find information. The site also has accessibility issues, which make it tough for people with disabilities to use. Additionally, there are broken links, outdated content, and important information locked in PDFs. The website lacks interactive tools and clear calls to action, and updating the site is time-consuming because the system is outdated and tangled. To better serve users and support the organization\u2019s mission, a complete website redesign is needed to improve functionality, user experience, and growth potential.",
    solution:
      "Untangling the current Mains\u2019l website will require careful attention to detail and strategic reorganization. The current platform does not effectively meet the needs of its diverse audience \u2014 including individuals with disabilities, caregivers, agencies, job seekers, and employees. Our aim is to transform this website into a fully functional, user-friendly resource that delivers seamless navigation and easily accessible information and actions to all visitors. This strategic transformation aims to create an online space that is not only functional and informative but also welcoming \u2014 embodying Mains\u2019l\u2019s commitment to community, support, and accessibility.",
    strategyPoints: [
      {
        title: "Clear Structure & Navigation",
        description:
          "We envision a platform where the structure is clear, allowing users to effortlessly find the resources and support they need. By simplifying content and converting PDFs into accessible web pages, we will improve the clarity of information and enhance SEO performance.",
      },
      {
        title: "Accessibility & Inclusivity",
        description:
          "Accessibility and inclusivity are at the core of this rebuild. We will adhere to WCAG standards and incorporate multilingual support to ensure the site is usable for all audiences.",
      },
      {
        title: "Modern, Scalable Foundation",
        description:
          "The new site will be built on a modern, scalable foundation with an intuitive content management system that empowers the Mains\u2019l team to easily maintain and expand content.",
      },
    ],
  },
  website: {
    heading: "Website Structure & Features Overview",
    scopeLabel: "48\u201360 Core Pages",
    pages: [
      {
        name: "Home Page",
        description:
          "Welcoming messaging, audience navigation pathways (Individuals & Families, Caregivers, Agencies, Job Seekers, Employees), MN/CA location selector, highlights, and a prominent search bar.",
      },
      {
        name: "About Us",
        description:
          "Mission & vision, our story with an interactive timeline, leadership team profiles, success stories, and accreditations & awards.",
      },
      {
        name: "Services",
        description:
          "Tailored service listings for Individuals & Families, Caregivers, and Agencies & Professionals \u2014 from person-centered planning to financial management and behavioral health consulting.",
      },
      {
        name: "Resources",
        description:
          "A comprehensive resource library of guides, articles, and tools, plus FAQs answering common questions.",
      },
      {
        name: "Training & Events",
        description:
          "Upcoming events calendar, detailed training schedules, interactive registration forms, and an archive of past training sessions.",
      },
      {
        name: "Careers",
        description:
          "Job openings, company culture, employee benefits, application process, testimonials, and internship and volunteer opportunities.",
      },
      {
        name: "Contact Us",
        description:
          "General inquiries, feedback forms, and social media links for easy connection.",
      },
      {
        name: "Locations",
        description:
          "Minnesota and California sections with local services overviews, news & events, and office contact information.",
      },
      {
        name: "Policies & Compliance",
        description:
          "Privacy policy, accessibility statement, and data protection policies.",
      },
      {
        name: "Digital Solutions",
        description:
          "Navigation Plus and Center On Me \u2014 overview & features, success stories, and demo requests.",
      },
      {
        name: "Employee Support",
        description:
          "Internal resources, newsletters, employee portal, and support services for daily operations.",
      },
    ],
    note:
      "While we have outlined an initial structure and a few key features, we remain adaptable to integrate additional elements that may emerge during the development process, ensuring the final product fully meets the evolving needs of Mains\u2019l\u2019s community and organization.",
  },
  brand: {
    heading: "Accessibility Goals & Requirements",
    intro:
      "Accessibility is at the core of this rebuild. The new site will comply with WCAG standards across every element, ensuring all audiences can use it comfortably.",
    groups: [
      {
        title: "Perceivable Elements",
        items: [
          {
            title: "Alt Text for Images",
            description:
              "Descriptive alt attributes for all meaningful images.",
          },
          {
            title: "Captions & Transcripts",
            description:
              "Captions for videos and transcripts for audio content to assist users with hearing impairments.",
          },
          {
            title: "Sufficient Color Contrast",
            description:
              "A contrast ratio of at least 4.5:1 between text and background.",
          },
          {
            title: "Resizable Text",
            description:
              "Users can resize text up to 200% without loss of content or functionality.",
          },
        ],
      },
      {
        title: "Operable Elements",
        items: [
          {
            title: "Keyboard Accessibility",
            description:
              "All website functions operable using only a keyboard.",
          },
          {
            title: "Focus Indicators",
            description:
              "Clear visual indicators for all interactive elements to show which element is focused.",
          },
          {
            title: "No Flashing Content",
            description:
              "No content flashes more than three times per second, preventing seizures.",
          },
        ],
      },
      {
        title: "Understandable Elements",
        items: [
          {
            title: "Consistent Navigation & Layout",
            description:
              "Navigation menus and page layouts stay consistent across the website.",
          },
          {
            title: "Clear & Simple Language",
            description:
              "Straightforward language, avoiding jargon, so content is understandable for all users.",
          },
          {
            title: "Labels & Instructions",
            description:
              "Clear labels and instructions for forms and interactive elements.",
          },
          {
            title: "Error Handling",
            description:
              "Forms include clear error messages and instructions for correcting mistakes.",
          },
        ],
      },
      {
        title: "Robust Elements",
        items: [
          {
            title: "Semantic HTML",
            description:
              "Semantic elements provide meaningful structure for assistive technologies.",
          },
          {
            title: "ARIA Roles & Landmarks",
            description:
              "ARIA attributes define roles and states for screen readers where necessary.",
          },
          {
            title: "Cross-Browser Compatibility",
            description:
              "Works across different browsers and with assistive technologies like screen readers.",
          },
        ],
      },
      {
        title: "Accessible Multimedia",
        items: [
          {
            title: "Video & Audio Controls",
            description:
              "Accessible controls to pause, stop, or adjust volume on all multimedia content.",
          },
          {
            title: "Audio Descriptions",
            description:
              "Audio descriptions for videos where necessary to convey important visual information.",
          },
        ],
      },
      {
        title: "Testing & Maintenance",
        items: [
          {
            title: "Automated Testing Tools",
            description:
              "Accessibility tools (WAVE, Axe, Lighthouse) used throughout development to catch common issues.",
          },
          {
            title: "Manual Testing",
            description:
              "Keyboard-only and screen-reader testing (NVDA, VoiceOver) to verify real-world accessibility.",
          },
          {
            title: "User Feedback",
            description:
              "A mechanism for users to report accessibility issues, ensuring ongoing improvements.",
          },
          {
            title: "Regular Audits",
            description:
              "Periodic accessibility audits keep the website compliant with evolving standards.",
          },
        ],
      },
      {
        title: "Documentation",
        items: [
          {
            title: "Accessibility Statement",
            description:
              "A public statement outlining our commitment to accessibility with contact information for reporting issues.",
          },
        ],
      },
    ],
    note:
      "Accessibility isn\u2019t a checklist item \u2014 it\u2019s a continuous practice built into every phase of this project, from content strategy through post-launch audits.",
    noteLabel: "Our Commitment",
  },
  timeline: {
    heading: "Website Development Plan: Milestones & Timeline",
    phases: [
      {
        title: "Content Navigation & Mapping",
        duration: "6 weeks",
        hours: "90\u2013120 hrs",
        objective:
          "Develop a strategic approach to content organization, creation, and structure.",
        items: [
          {
            title: "Person Centered Research",
            description:
              "Gain a solid understanding of the needs of all individuals involved.",
          },
          {
            title: "Grow Business Understanding",
            description:
              "Gather insights to better understand the organization\u2019s goals, services, and market opportunities, aligning website strategy with broader business objectives.",
          },
          {
            title: "User Research",
            description:
              "Analyze current user behavior, conduct surveys, and gather feedback from existing users.",
          },
          {
            title: "Technical Audit",
            description:
              "Assess the current website\u2019s technology stack, performance, and SEO.",
          },
          {
            title: "Content Audit",
            description:
              "Review existing content to identify what to keep, update, create, restructure or remove.",
          },
          {
            title: "Content Planning",
            description: "Define content types, formats, and pathways.",
          },
          {
            title: "Personas & Journey Mapping",
            description:
              "Create personas and map out user journeys to target specific demographics.",
          },
          {
            title: "Information Architecture",
            description:
              "Further develop a clear and intuitive site structure.",
          },
          {
            title: "Initiate SEO Strategy",
            description:
              "Identify target keywords and optimize content for search engines.",
          },
        ],
      },
      {
        title: "Content Creation",
        duration: "7 weeks",
        hours: "120\u2013150 hrs",
        objective:
          "Develop high-quality, engaging, and accessible content pathways tailored to target audiences.",
        items: [
          {
            title: "Low Fidelity Wireframing",
            description: "Draft basic layouts, actions, and features.",
          },
          {
            title: "Refining & Organizing Content",
            description:
              "Edit and restructure existing content and associate with intended pages.",
          },
          {
            title: "Content Development",
            description: "Create new content to fill gaps.",
          },
          {
            title: "Website Copywriting",
            description:
              "Create clear, concise, and engaging copy for all website sections.",
          },
          {
            title: "Multilingual Content Strategy",
            description:
              "Translate and adapt content for multiple languages.",
          },
          {
            title: "Content Conversion",
            description:
              "Transform existing PDFs into accessible content and match to intended pages.",
          },
          {
            title: "Storytelling Elements",
            description:
              "Develop success stories, testimonials, and case studies into rich content.",
          },
          {
            title: "Visual Content Creation",
            description:
              "Design graphics, icons, infographics, and select high-quality images and videos.",
          },
        ],
      },
      {
        title: "Design",
        duration: "6 weeks",
        hours: "100\u2013130 hrs",
        objective:
          "Create a modern, user-friendly, on-brand and visually appealing design that enhances user experience.",
        items: [
          {
            title: "High Fidelity Wireframing",
            description:
              "Develop high fidelity wireframes for key pages to outline layout and structure.",
          },
          {
            title: "Mockups",
            description:
              "Design high-fidelity mockups incorporating the new branding and design elements.",
          },
          {
            title: "Responsive Design",
            description:
              "Ensure designs are optimized for all devices (desktop, tablet, mobile).",
          },
          {
            title: "User Interface (UI) Design",
            description:
              "Focus on aesthetics, including typography, color schemes, and interactive elements.",
          },
          {
            title: "Design Reviews & Revisions",
            description: "Iterate designs based on stakeholder feedback.",
          },
        ],
      },
      {
        title: "Development",
        duration: "8 weeks",
        hours: "150\u2013180 hrs",
        objective:
          "Build the website based on the approved designs, ensuring functionality and performance.",
        items: [
          {
            title: "Setup Development Environment",
            description: "Configure servers, CMS, and necessary tools.",
          },
          {
            title: "Accessibility Developments",
            description:
              "Implement semantic HTML, ARIA roles, keyboard navigation, color contrast optimization, skip links, accessible forms, and text resizing for WCAG compliance.",
          },
          {
            title: "Front-End Development",
            description:
              "Convert design mockups into responsive, interactive web pages.",
          },
          {
            title: "Back-End Development",
            description:
              "Implement functionalities, integrations (e.g., Navigation Plus), and database management.",
          },
          {
            title: "CMS Configuration",
            description:
              "Set up and customize the content management system for easy updates.",
          },
          {
            title: "Interactive Features",
            description:
              "Add resource library, forms, calendars, and other engagement tools.",
          },
          {
            title: "Security Implementation",
            description:
              "Apply security measures, including SSL, data protection, and compliance standards.",
          },
        ],
      },
      {
        title: "Testing & Quality Assurance",
        duration: "3 weeks",
        hours: "50\u201360 hrs",
        objective:
          "Ensure the website is bug-free, performs well, and meets all requirements.",
        items: [
          {
            title: "Functional Testing",
            description:
              "Verify all features and functionalities work as intended.",
          },
          {
            title: "Usability Testing",
            description:
              "Conduct user testing sessions to gather feedback on navigation and user experience.",
          },
          {
            title: "Performance Testing",
            description:
              "Test website speed, responsiveness, and load times.",
          },
          {
            title: "Accessibility Testing",
            description:
              "Ensure WCAG compliance and compatibility with assistive technologies.",
          },
          {
            title: "Cross-Browser Testing",
            description:
              "Check functionality across different browsers and devices.",
          },
          {
            title: "Bug Fixing",
            description: "Address any issues identified during testing.",
          },
        ],
      },
      {
        title: "Launch Preparation",
        duration: "3 weeks",
        hours: "30\u201340 hrs",
        objective: "Prepare for a smooth and successful website launch.",
        items: [
          {
            title: "Instructional Videos & Coaching",
            description:
              "Training resources and coaching sessions to guide the team on managing the new website.",
          },
          {
            title: "Content Migration",
            description: "Transfer content from the old site to the new one.",
          },
          {
            title: "Final Review",
            description:
              "Conduct a final walkthrough with stakeholders for approval.",
          },
          {
            title: "SEO Finalization",
            description:
              "Optimize meta tags, alt texts, and ensure all SEO best practices are implemented.",
          },
          {
            title: "Backup & Security Checks",
            description:
              "Ensure all data is backed up and security measures are in place.",
          },
          {
            title: "Launch Plan",
            description:
              "Develop a detailed launch plan, including go-live steps and communication strategy.",
          },
        ],
      },
      {
        title: "Launch & Post-Launch Support",
        duration: "2 weeks",
        hours: "20\u201330 hrs",
        objective:
          "Execute the launch and provide ongoing support to ensure stability.",
        items: [
          {
            title: "Website Launch",
            description: "Go live with the new website.",
          },
          {
            title: "Monitoring",
            description:
              "Closely monitor website performance and user feedback post-launch.",
          },
          {
            title: "Immediate Fixes",
            description:
              "Address any issues that arise during the initial launch phase.",
          },
          {
            title: "Ongoing Support",
            description: "Provide support and maintenance as needed.",
          },
        ],
      },
    ],
    milestones: [
      { label: "Start Date", date: "Nov 1", position: 0 },
      { label: "Design", date: "Feb 3", position: 0.37 },
      { label: "Development", date: "Mar 17", position: 0.54 },
      { label: "Launch", date: "Jul 20", position: 1 },
    ],
    totalDuration: "Approximately 9 months (35 weeks)",
    totalHours: "523\u2013648 hours",
  },
  pricing: {
    heading: "Membership Benefits & Pricing Structure",
    intro:
      "We\u2019ve crafted a system to suit every partnership level. Members who commit to our agency with a monthly retainer and an hour bank enjoy preferential rates, reflecting the value of a sustained and collaborative relationship. This membership model is designed to foster a true partnership, allowing us to delve deeply into your unique brand story and craft strategies with precision. For non-members, our services are available at standard rates, offering flexibility without the commitment.",
    options: [
      {
        label: "Option 1",
        name: "Project-Based Pricing",
        rate: "$125 per hr",
        description:
          "Ideal for one-time services without long-term commitments. Tailored for specific, immediate needs with high flexibility and customization \u2014 suitable for clients seeking a one-off project with specific requirements.",
        stats: [
          { label: "Time Est", value: "523\u2013648 hrs" },
          { label: "Cost Per Agency Hr", value: "$125" },
          {
            label: "Labor Cost Est",
            value: "$65,375 \u2013 $81,000",
            emphasize: true,
          },
          { label: "Down Deposit", value: "$19,671.89" },
          { label: "Technologies Budget", value: "$2,500" },
          { label: "Monthly Hosting", value: "$250" },
          { label: "Commitment", value: "None" },
        ],
      },
      {
        label: "Option 2",
        name: "Web Project + Membership",
        rate: "$100 per hr",
        description:
          "A commitment plan offering ongoing support and service, including a time bank for continuous service over the year. Ideal for clients requiring steady, long-term digital strategy and support, with flexibility to allocate extra hours toward additional pages, features, or enhanced design elements.",
        highlighted: true,
        stats: [
          { label: "Yearly Bank", value: "700 hrs" },
          { label: "Total Website Hours", value: "523\u2013648 hrs" },
          { label: "Cost Per Agency Hr", value: "$100" },
          { label: "Monthly Cost", value: "$6,291.67", emphasize: true },
          { label: "Technologies Budget", value: "$2,500" },
          { label: "Monthly Hosting", value: "$250" },
          { label: "Savings", value: "$17,500+" },
          { label: "Commitment", value: "1 Year" },
        ],
      },
    ],
    footnote:
      "Down deposit reflects 25% of median cost and is billed out quarterly according to the project timeline. Our members find that this model of engagement allows for a more integrated approach to their marketing needs, ensuring consistency and a dedicated focus on long-term results.",
  },
  agreement: {
    heading: "Website Development Agreement",
    preamble:
      "This Website Development Agreement (the \u201cAgreement\u201d) is made effective as of the last date of signature (the \u201cEffective Date\u201d) by and between the undersigned client, Mains\u2019l (the \u201cClient\u201d), and the combined services of Clubhaus Agency and GA Consulting (jointly referred to as the \u201cDeveloper\u201d).",
    terms: [
      {
        title: "Scope of Work",
        body:
          "The Developer shall design, develop, and deploy a fully operational website for the Client\u2019s businesses, as detailed in the attached project proposal. The website shall encompass the features, functionalities, and design elements as mutually agreed upon and documented post the project discovery consultations.",
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
    signatories: [
      { name: "Sam Morrow", company: "Clubhaus Agency LLC" },
      { name: "Authorized Representative", company: "GA Consulting" },
      { name: "Authorized Representative", company: "Mains\u2019l" },
    ],
  },
};
