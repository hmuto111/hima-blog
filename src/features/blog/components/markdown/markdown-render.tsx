import { CustomLink } from "./custom-link";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import styles from "./markdown.module.css";

type Props = {
  content: string;
};

export const MarkdownRender = ({ content }: Props) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code({ node, className, children, ref, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={vscDarkPlus as any}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        blockquote({ node, children, ...props }) {
          return (
            <blockquote className={styles.blockquote} {...props}>
              {children}
            </blockquote>
          );
        },
        a: (props) => <CustomLink {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ul: ({ node, children, ...props }) => (
          <ul className={styles.list} {...props}>
            {children}
          </ul>
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ol: ({ node, children, ...props }) => (
          <ol className={styles.orderedList} {...props}>
            {children}
          </ol>
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        table: ({ node, children, ...props }) => (
          <table className={styles.table} {...props}>
            {children}
          </table>
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        th: ({ node, children, ...props }) => (
          <th className={styles.tableHeader} {...props}>
            {children}
          </th>
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        td: ({ node, children, ...props }) => (
          <td className={styles.tableCell} {...props}>
            {children}
          </td>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};
