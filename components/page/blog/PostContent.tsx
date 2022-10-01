import { BodyText } from "#/components/text/BodyText.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";

export type PostContentProps = {
  value: string;
};

export function PostContent({ value }: PostContentProps) {
  return (
    <div className="flex-1 flex flex-col pt-0 sm:pt-5 xl:pt-10 pl-1 sm:pl-0 pr-1 sm:pr-0 justify-start">
      <BodyText>
        <Markdown
          text={value}
          className="flex flex-col gap-5"
        />
      </BodyText>
    </div>
  );
}
