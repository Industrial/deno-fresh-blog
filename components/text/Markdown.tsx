import { useMemo } from "preact/hooks";

import { ClassNameProps, withClassNames } from "#/lib/classNames.ts";
import { markdownToHTML } from "#/lib/markdown.ts";

export type MarkdownProps = ClassNameProps & {
  text: string;
};

export function Markdown({ text, className }: MarkdownProps) {
  const html = useMemo(() => {
    return markdownToHTML(text);
  }, [text]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      {...withClassNames(className)}
    />
  );
}
