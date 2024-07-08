import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodeSnippet = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
      <pre className="language-javascript">
        <code className="language-javascript">{code}</code>
      </pre>
      <button className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600">
        Copy code
      </button>
    </div>
  );
};

export default CodeSnippet;
