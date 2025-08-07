const skills = [
  {
    group: 'Frontend',
    list: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Astro',
    ]
  },
  {
    group: 'Backend',
    list: [
      'Django',
      'Node.js',
      'Express.js',
      'Nest.js',
      'Rails',
      'Go'
    ]
  },
  {
    group: 'Databases',
    list: [
      'PostgreSQL',
      'DynamoDB',
      'Supabase'
    ]
  },
  {
    group: 'Infrastructure',
    list: [
      'AWS CDK',
      'AWS Lambda',
      'Docker',
      'Terraform',
      'Terragrunt',
      'Nginx',
    ]
  },
  {
    group: 'Languages',
    list: [
      'Javascript/Typescript',
      'Python',
      'Go',
      'Ruby',
    ]
  },
  {
    group: 'Other',
    list: [
      'Stripe',
      'WebSockets',
      'NFTs',
      'QLDB'
    ]
  }
]

const SkillsCommand = () => (
  <div className="flex flex-col text-gray-400 gap-2">
    {skills.map(({ group, list }) => (
      <div className="flex flex-col">
        <span className="ml-2 text-gray-300">{group}</span>
        <span className="ml-4">{list.join(', ')}</span>
      </div>
    ))}
  </div>
);

export default SkillsCommand;
