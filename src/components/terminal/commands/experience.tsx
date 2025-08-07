import { Briefcase, ChevronRight } from "lucide-react";

const experience = [
  {
    name: 'Storydough (Melt Studio)',
    from: 'Apr 2025',
    position: 'Full Stack Developer',
    items: [
      <span>Contributed to the development of <span className="text-gray-300">Storydough</span>, an AI-powered PRD platform for product managers.</span>,
      <span>Implement <span className="text-gray-300">LLM-driven PRD updates</span> utilizing Anthropic, DynamoDB and Lambda</span>,
      <span>Develop a full-stack application with Next.js and Drizzle ORM</span>,
      <span>Implement an MCP client using FastMCP</span>,
    ]
  },
  {
    name: 'Quikly',
    from: 'Jun 2024',
    to: 'May 2025',
    position: 'Tech Lead & Co-founder',
    items: [
      <span>Developing <span className="text-gray-300">QuikCards</span>, a digital <span className="text-gray-300">card service</span>and <span className="text-gray-300">mini-page platform</span> where users can create and manage their links, using <span className="text-gray-300">Next.js, Supabase, and AWS.</span></span>,
      <span>Working on <span className="text-gray-300">Quikly Parking</span>, a local parking solution built with <span className="text-gray-300">Django.</span></span>,
      <span>Developing <span className="text-gray-300">Quikly Autoatención</span>, a POS service for restaurants with self-service touchscreen modules, using <span className="text-gray-300">Django and React</span></span>,
      <span>As <span className="text-gray-300">Tech Lead</span>, I define the architecture and technological strategy of the project.</span>,
    ]
  },
  {
    name: 'Highest Vibrations',
    from: 'Mar 2021',
    to: 'Aug 2024',
    position: 'Tech Lead',
    items: [
      <span>Led a team of <span className="text-gray-300">4 developers</span>, organizing tasks and reviewing code.</span>,
      <span>Built a <span className="text-gray-300">social network platform</span> called Vibe for alternative medicine practitioners, where they could create communities, sell services, and organize events(free or paid via Stripe).</span>,
      <span>Implemented a virtual currency system(Good Vibes) based on QLDB, enabling payments, donations, and gifts within the platform.</span>,
      <span>Developed the frontend using <span className="text-gray-300">React and React Native</span> and the backend with <span className="text-gray-300">TypeScript, CDK, and DynamoDB.</span></span>,
    ]
  },
  {
    name: 'The Possibility Company',
    from: 'Jan 2021',
    to: 'Mar 2023',
    position: 'Full Stack Developer',
    items: [
      <span>Developed a social network for high school students called <span className="text-gray-300">Zaahah</span>, focused on extracurricular activities and real- life events.</span>,
      <span>Implemented the frontend using <span className="text-gray-300">React and React Native</span> and the backend with <span className="text-gray-300">TypeScript, CDK, and DynamoDB.</span></span>,
      <span>Developed a <span className="text-gray-300">gamification system</span> with a virtual currency (Aha) using QLDB.</span>,
      <span>Created the <span className="text-gray-300">Aha Wallet</span> app in React Native to allow users to view their balance, and implemented an <span className="text-gray-300">NFT system</span>that automatically assigned tokens to users upon registration.</span>,
    ]
  },
]

const ExperienceCommant = () => (
  <div className="flex flex-col text-gray-400 gap-4">
    {experience.map(({ name, from, to, position, items }) => (
      <div className="flex flex-col leading-none gap-1">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-green-400" />
          <span className="text-gray-300">
            {name}
          </span>
          <span className="text-yellow-500">
            {from} - {to ?? 'Present'}
          </span>
        </div>
        <span>{position}</span>
        <div className="ml-2 flex flex-col gap-1">
          {items.map((item) => (
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-green-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceCommant;
