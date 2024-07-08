import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodeSnippet = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = () => {
    // Copy code to clipboard
    window.navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
    });
  };

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isCopied) {
      intervalId = setInterval(() => {
        setIsCopied(false);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCopied]);

  return (
    <div className="bg-[#2D2D2D] rounded-md relative">
      <pre className="language-javascript">
        <code className="language-javascript">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-zinc-800 text-white text-sm px-2 py-1 rounded hover:bg-zinc-700"
      >
        {isCopied ? "Copied!" : "Copy code"}
      </button>
    </div>
  );
};

export default CodeSnippet;
