import React, { useEffect, useRef, useState, type FC } from "react";
import Prompt from "./prompt";
import { getCommandOutput } from "./commands";
import Reminder from "./commands/reminder";
import FetchCommand from "./commands/fetch";

type Line = {
  command: string;
  output: React.ReactElement | null;
  hidePrompt?: boolean;
}

const Terminal: FC = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastHistoryLength = useRef(0);
  const [history, setHistory] = useState<Line[]>([
  ]);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAutoScroll(entry.isIntersecting);
      },
      { threshold: 0.1 },
    )

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    setHistory([
      {
        command: 'fetch',
        output: <FetchCommand sendCommand={handleCommand} />,
        hidePrompt: true,
      },
      {
        command: 'reminder',
        output: <Reminder sendCommand={handleCommand} />,
        hidePrompt: true,
      },
    ])

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    const historyChange = history.length !== lastHistoryLength.current;
    lastHistoryLength.current = history.length;
    if (shouldAutoScroll || historyChange) {
      bottomRef.current?.scrollIntoView({ behavior: 'instant' });
    }
  }, [history, shouldAutoScroll])

  const handleCommand = (command: string) => {
    if (command === 'clear') setHistory([
      {
        command: 'reminder',
        output: <Reminder sendCommand={handleCommand} />,
        hidePrompt: true,
      }
    ]);
    else setHistory(
      (h) => ([
        ...h,
        {
          command,
          output: getCommandOutput(command, handleCommand)
        }
      ])
    );
  }

  return (
    <>
      {history.map((line, idx) => line.hidePrompt ? (
        <div className="mb-2" key={idx}>{line.output}</div>
      ) : (
        <Prompt
          key={idx}
          used
          command={line.command}
          output={line.output}
        />
      ))}
      <Prompt onCommand={handleCommand} />
      <div ref={bottomRef} className="h-4" />
    </>
  )
}

export default Terminal;
