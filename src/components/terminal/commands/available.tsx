import type { FC } from "react";

const commands = [
  {
    command: 'about',
    description: 'Who\'s this guy anyway?'
  },
  {
    command: 'experience',
    description: 'Where I have worked'
  },
  {
    command: 'skills',
    description: 'What I know how to do'
  },
  {
    command: 'contact',
    description: 'Where to find me'
  },
  {
    command: 'fetch',
    description: 'The thing with my face'
  },
  {
    command: 'pwd',
    description: 'Where I am'
  },
  {
    command: 'help',
    description: 'How to use this thing'
  },
  {
    command: 'clear',
    description: 'Clears the terminal screen'
  },
]

type Props = {
  sendCommand: (command: string) => void;
}

const AvailableCommands: FC<Props> = ({ sendCommand }) => (
  <div className="text-gray-400 flex flex-col">
    <span>Commands available:</span>
    <div className="ml-2 grid grid-cols-[auto_1fr] gap-x-4">
      {commands.map((c) => (
        <>
          <span>
            <button
              className="cursor-pointer underline text-gray-300"
              onClick={() => sendCommand(c.command)}
            >
              {c.command}
            </button>
            :
          </span>
          <span>{c.description}</span>
        </>
      ))}
    </div>
  </div>
)

export default AvailableCommands;
