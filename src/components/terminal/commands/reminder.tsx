import type { FC } from "react";

type Props = {
  sendCommand: (command: string) => void;
}

const Reminder: FC<Props> = ({ sendCommand }) => (
  <span className="text-gray-500">Type <button className="text-green-500 italic cursor-pointer underline" onClick={() => sendCommand("help")}>"help"</button> to see available commands</span>
)

export default Reminder;
