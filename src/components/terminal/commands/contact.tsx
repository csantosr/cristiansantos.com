import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const ContactCommand = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("cristian@hey.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className="flex flex-col text-gray-400 leading-none gap-1">
      <span>{"{"}</span>
      <div className="ml-10 flex gap-4 items-center">
        <span className="text-teal-400">"email"</span>
        <span>:</span>
        <span className="text-yellow-400">"cristian@hey.com",</span>
        <button className="cursor-pointer" onClick={handleCopyEmail}>
          {copied ? (
            <CopyCheck className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="ml-10 flex gap-4 items-center">
        <span className="text-teal-400">"linkedin"</span>
        <span>:</span>
        <span className="text-yellow-400">"<a className="underline" href="https://linkedin.com/in/csantosr" target="_blank">csantosr</a>",</span>
      </div>
      <div className="ml-10 flex gap-4 items-center">
        <span className="text-teal-400">"github"</span>
        <span>:</span>
        <span className="text-yellow-400">"<a className="underline" href="https://github.com/csantosr" target="_blank">csantosr</a>",</span>
      </div>
      <span>{"}"}</span>
    </div>
  )
}

export default ContactCommand;
