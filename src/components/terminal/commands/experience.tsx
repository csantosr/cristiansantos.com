import { Briefcase, ChevronRight } from "lucide-react";
import { experience } from "../../../data/experience";

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
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceCommant;
