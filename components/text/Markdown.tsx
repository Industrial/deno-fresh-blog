import { useMemo } from "preact/hooks";

import { ClassNameProps, withClassNames } from "#/lib/classNames.ts";
import { markdownToHTML } from "#/lib/markdown.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type MarkdownProps = ClassNameProps & {
  text: string;
};

export function Markdown({
  text,
  className,
}: MarkdownProps): JSX.Element {
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
