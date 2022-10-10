import { Title } from "#/components/text/Title.tsx";
import { color } from "#/style/theme.ts";
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";
import { ClassNameProps } from "../../../lib/classNames.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type PostTitleProps = ClassNameProps & {
  href?: string;
  text: string;
};

export function PostTitle({
  href,
  text,
  className,
}: PostTitleProps): JSX.Element {
  return (
    <a
      className={cx(
        css({
          display: "block",
          color: color.black,
          textDecoration: "none",
        }),
        className,
      )}
      href={href}
    >
      <Title variant="h2">{text}</Title>
    </a>
  );
}
