import type { FC } from "react";

const PWDCommand: FC = () => (
  <span className="text-gray-400">
    Dev based in{" "}
    <a
      className="inline-flex items-center gap-1 underline"
      href="https://en.wikipedia.org/wiki/Puente_de_Boyac%C3%A1"
      target="_blank"
    >
      Boyacá
      <img
        src="/bbridge.svg"
        alt="Bridge of Boyacá"
        className="h-3 inline-block"
      />
    </a>
    , Colombia</span>
)

export default PWDCommand;
