import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeCopyBtn from "./CodeCopyBtn/CodeCopyBtn";
const MarkDown = ({ markdown }) => {
  const Pre = ({ children }) => (
    <pre className="doc-pre">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );
  return (
    <ReactMarkdown
      children={markdown}
      components={{
        pre: Pre,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            // @ts-ignore
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              PreTag="div"
              className="border-radius"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
export default MarkDown;
