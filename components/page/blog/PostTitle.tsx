import { Title } from "#/components/text/Title.tsx";
import { color } from "#/style/theme.ts";
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";

export type PostTitleProps = {
  href?: string;
  text: string;
};

export function PostTitle({ href, text }: PostTitleProps) {
  return (
    <a
      className={cx(
        css({
          color: color.black,
          textDecoration: "none",

          ...smUp({
            fontSize: "32px",
          }),
        }),
      )}
      href={href}
    >
      <Title>{text}</Title>
    </a>
  );
}
