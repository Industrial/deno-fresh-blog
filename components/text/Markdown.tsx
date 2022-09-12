import { markdownToHTML } from "#/lib/markdown.ts";
import { useMemo } from "preact/hooks";

export type MarkdownProps = {
  text: string;
  className?: string;
};

export function Markdown({ text, className }: MarkdownProps) {
  const html = useMemo(() => {
    return markdownToHTML(text);
  }, [text]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
  );
}
