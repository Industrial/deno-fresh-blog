import { BodyText } from "#/components/text/BodyText.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";
import { ClassNameProps } from "../../../lib/classNames.ts";

export type PostContentProps = {
  value: string;
} & ClassNameProps;

export function PostContent({
  value,
  className,
}: PostContentProps): JSX.Element {
  return (
    <BodyText className={className}>
      <Markdown
        text={value}
        className="flex flex-col gap-5"
      />
    </BodyText>
  );
}
