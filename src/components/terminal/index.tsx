import { useState, type FC } from "react";
import Prompt from "./prompt";

type Line = {
  command: string;
}

const Terminal: FC = () => {
  const [history, setHistory] = useState<Line[]>([])

  const handleCommand = (command: string) => {
    setHistory((h) => ([...h, { command }]))
  }

  return (
    <>
      {history.map((line) => <Prompt used command={line.command} />)}
      <Prompt onCommand={handleCommand} />
    </>
  )
}

export default Terminal;
