import { BodyText } from "#/components/text/BodyText.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";
import { ClassNameProps } from "../../../lib/classNames.ts";

export type PostContentProps = {
  value: string;
} & ClassNameProps;

export function PostContent({ value, className }: PostContentProps) {
  return (
    <BodyText className={className}>
      <Markdown
        text={value}
        className="flex flex-col gap-5"
      />
    </BodyText>
  );
}
