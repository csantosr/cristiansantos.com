import { about } from "../../../data/about";

const AboutCommand = () => (
  <div className="flex flex-col text-gray-400">
    <span className="text-gray-300">Hello, world!</span>
    <span className="ml-2">I'm {about.name}, a {about.title} based in {about.location}.</span>
    <span className="ml-2">My tech stack includes {about.stack.join(', ')}.</span>
    <span className="ml-2">{about.summary}</span>
  </div>
)

export default AboutCommand;
