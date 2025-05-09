import React from "react";
import Markdown from "react-markdown";
import styles from "./table-of-contents.module.css";

type AnkerLinkProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const AnkerLink = ({ node, ...props }: AnkerLinkProps) => {
  const style = { paddingLeft: "0%", display: "block" };
  if (node.tagName === "h1") style.paddingLeft = "0%";
  else if (node.tagName === "h2") style.paddingLeft = "15%";
  else if (node.tagName === "h3") style.paddingLeft = "30%";
  else if (node.tagName === "#text") style.display = "none";
  else style.display = "none";

  const elementId = node.position?.start.line.toString() || "";

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const id = elementId;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      {...props}
      href={"#" + elementId}
      className={styles.anchor}
      style={style}
    >
      {props.children}
    </a>
  );
};

export const TableOfContents = ({ contents }: { contents: string }) => {
  return (
    <div className={styles.toc}>
      <Markdown
        allowedElements={["h1", "h2", "h3"]}
        components={{
          h1: ({ node, ...props }) => <AnkerLink node={node} {...props} />,
          h2: ({ node, ...props }) => <AnkerLink node={node} {...props} />,
          h3: ({ node, ...props }) => <AnkerLink node={node} {...props} />,
        }}
      >
        {contents}
      </Markdown>
    </div>
  );
};
