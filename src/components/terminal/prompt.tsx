import type { FC, ReactElement } from "react";
import useAlwaysFocused from "../../hooks/useAlwaysFocused";
import type React from "react";

type Props = {
  used?: boolean;
  command?: string;
  onCommand?: (command: string) => void;
  output?: ReactElement | null;
}

const Prompt: FC<Props> = ({ used, command, onCommand, output }) => {
  const inputRef = useAlwaysFocused(!used);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onCommand) {
      onCommand(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  }

  return (
    <>
      <div className="flex flex-row gap-2">
        <span className={used ? "text-gray-600" : "text-purple-400"}>cristian@portfolio</span>
        <span className={used ? "text-gray-600" : "text-gray-400"}>:</span>
        <span className={used ? "text-gray-600" : "text-blue-400"}>~</span>
        <span className={used ? "text-gray-600" : "text-gray-400"}>$</span>
        {(used && command) ? (
          <span className="text-green-400">{command}</span>
        ) : (
          <input
            ref={inputRef}
            type="text"
            className={`text-green-400 width-full outline-none`}
            onKeyDown={handleOnKeyDown}
            autoCapitalize="off"
          />
        )}
      </div>
      {output && (
        <div className="m-2 p-2 border-l-2 border-purple-500">{output}</div>
      )}
    </>
  )
}

export default Prompt;
