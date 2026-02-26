import { skills } from "../../../data/skills";

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
