export type SkillGroup = {
  group: string;
  list: string[];
}

export const skills: SkillGroup[] = [
  {
    group: 'Frontend',
    list: ['React', 'Next.js', 'Tailwindcss', 'Astro'],
  },
  {
    group: 'Backend',
    list: ['Django', 'Node.js', 'Express.js', 'Nest.js', 'Go'],
  },
  {
    group: 'Databases',
    list: ['PostgreSQL', 'DynamoDB', 'Supabase'],
  },
  {
    group: 'Infrastructure',
    list: ['AWS CDK', 'AWS Lambda', 'Docker', 'Terraform', 'Terragrunt', 'Nginx'],
  },
  {
    group: 'Languages',
    list: ['Javascript/Typescript', 'Python', 'Go'],
  },
  {
    group: 'Other',
    list: ['Stripe', 'WebSockets', 'NFTs', 'QLDB'],
  },
]
