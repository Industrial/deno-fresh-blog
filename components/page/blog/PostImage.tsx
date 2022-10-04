import { css, cx } from "#/lib/emotion.ts";
import { lgUp, smUp } from "#/style/breakpoints.ts";
import { ClassNameProps } from "../../../lib/classNames.ts";

export type PostImageProps = {
  href?: string;
  src: string;
} & ClassNameProps;

export function PostImage({ href, src, className }: PostImageProps) {
  const image = (
    <img
      className={cx(
        css({
          width: "100%",

          ...lgUp({
            width: "100%",
          }),
        }),
        className,
      )}
      src={src}
    />
  );

  return (
    <>
      {href
        ? (
          <a
            href={href}
            className={cx(
              css({
                display: "block",
                width: "100%",
              }),
            )}
          >
            {image}
          </a>
        )
        : image}
    </>
  );
}
