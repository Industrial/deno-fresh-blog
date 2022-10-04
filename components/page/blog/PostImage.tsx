import { css, cx } from "#/lib/emotion.ts";
import { lgUp, smUp } from "#/style/breakpoints.ts";

export type PostImageProps = {
  href?: string;
  src: string;
};

export function PostImage({ href, src }: PostImageProps) {
  const image = (
    <img
      className={cx(
        css({
          width: "100%",

          ...smUp({
            // marginLeft: "auto",
            // marginRight: "auto",
            // width: "640px",
            // maxHeight: "480px",
          }),

          ...lgUp({
            width: "100%",
          }),
        }),
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
