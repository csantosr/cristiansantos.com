import type { ReactElement } from "react";
import HelpCommand from "./help";
import AvailableCommands from "./available";
import AboutCommand from "./about";
import SkillsCommand from "./skills";
import ExperienceCommant from "./experience";
import ContactCommand from "./contact";
import FetchCommand from "./fetch";
import PWDCommand from "./pwd";

export const getCommandOutput = (
  command: string,
  sendCommand: (command: string) => void,
): ReactElement | null => {
  switch (command) {
    case "":
      return null;
    case "about":
      return <AboutCommand />;
    case "skills":
      return <SkillsCommand />;
    case "experience":
      return <ExperienceCommant />;
    case "help":
      return <HelpCommand sendCommand={sendCommand} />;
    case "contact":
      return <ContactCommand />;
    case "fetch":
      return <FetchCommand sendCommand={sendCommand} />
    case "pwd":
      return <PWDCommand />
    default:
      return (
        <div className="flex flex-col gap-4">
          <span className="text-gray-400">csh: command not found: {command}</span>
          <AvailableCommands
            sendCommand={sendCommand}
          />
        </div>
      );
  }
}
