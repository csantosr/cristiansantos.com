export type Experience = {
  name: string;
  from: string;
  to?: string;
  position: string;
  items: string[];
}

export const experience: Experience[] = [
  {
    name: 'Agnitio (Melt Studio)',
    from: 'Dec 2025',
    position: 'Full Stack Developer',
    items: [
      'Built automated data ingestion pipelines across 5 ad platforms (Google Ads, Facebook, Amazon, Teads, DV360), replacing a manual per-client Looker workflow.',
      'Configured, customized, and built dashboards in Apache Superset to visualize ad performance data across platforms.',
    ],
  },
  {
    name: 'Storydough (Melt Studio)',
    from: 'Apr 2025',
    to: 'Dec 2025',
    position: 'Full Stack Developer',
    items: [
      'Contributed to the development of Storydough, an AI-powered PRD platform for product managers.',
      'Architected LLM-driven PRD generation using Anthropic\'s API, DynamoDB, and Lambda, the core feature of an AI-powered product management platform.',
      'Develop a full-stack application with Next.js and Drizzle ORM',
      'Implement an MCP client using FastMCP',
    ],
  },
  {
    name: 'Quikly',
    from: 'Jun 2024',
    to: 'May 2025',
    position: 'Tech Lead & Co-founder',
    items: [
      'Designed and built QuikCards end-to-end, a digital card and link-in-bio platform, using Next.js, Supabase, and AWS, from architecture to production.',
      'Working on Quikly Parking, a local parking solution built with Django.',
      'Developing Quikly Autoatención, a POS service for restaurants with self-service touchscreen modules, using Django and React',
      'As Tech Lead, I define the architecture and technological strategy of the project.',
    ],
  },
  {
    name: 'Highest Vibrations',
    from: 'Mar 2021',
    to: 'Aug 2024',
    position: 'Tech Lead',
    items: [
      'Led a team of 4 developers, organizing tasks and reviewing code.',
      'Architected a full-stack social platform for wellness practitioners, including communities, service listings, and Stripe payments; using React Native, TypeScript, AWS CDK, and DynamoDB.',
      'Implemented a virtual currency system (Good Vibes) based on QLDB, enabling payments, donations, and gifts within the platform.',
      'Developed the frontend using React and React Native and the backend with TypeScript, CDK, and DynamoDB.',
    ],
  },
  {
    name: 'The Possibility Company',
    from: 'Jan 2021',
    to: 'Mar 2023',
    position: 'Full Stack Developer',
    items: [
      'Built a gamified social network for high school students with a virtual currency system (QLDB) and an NFT wallet in React Native, deployed to production.',
      'Implemented the frontend using React and React Native and the backend with TypeScript, CDK, and DynamoDB.',
      'Developed a gamification system with a virtual currency (Aha) using QLDB.',
      'Created the Aha Wallet app in React Native to allow users to view their balance, and implemented an NFT system that automatically assigned tokens to users upon registration.',
    ],
  },
]
