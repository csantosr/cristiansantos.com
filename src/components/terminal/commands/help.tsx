import type { FC } from "react";
import AvailableCommands from "./available";

type Props = {
  sendCommand: (command: string) => void;
}

const HelpCommand: FC<Props> = ({ sendCommand }) => (
  <div className="flex flex-col gap-4">
    <div className="text-gray-400 flex flex-col">
      <span>About:</span>
      <span className="ml-2 mb-1">This portfolio works like a terminal! You have to type the command of what you want to see and, after you hit enter, the output will be displayed!</span>
      <span className="ml-2">Also, if you don't want to type, below are the available commands, just click the one you are interested in!</span>
    </div>
    <AvailableCommands sendCommand={sendCommand} />
  </div>
)

export default HelpCommand;
