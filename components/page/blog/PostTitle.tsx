import { Title } from "#/components/text/Title.tsx";

export type PostTitleProps = {
  href?: string;
  text: string;
};

export function PostTitle({ href, text }: PostTitleProps) {
  return (
    <Title className="mt-0 xl:mt-20 pb-1 sm:pb-2 md:pb-3 xl:pb-5">
      {href
        ? (
          <a href={href}>
            {text}
          </a>
        )
        : text}
    </Title>
  );
}
