import { css, cx } from "#/lib/emotion.ts";

export type PostImageProps = {
  href?: string;
  src: string;
};

export function PostImage({ href, src }: PostImageProps) {
  const image = (
    <img
      // className="w-full xl:w-full xl:h-full"
      className={cx(
        css({
          maxWidth: "640px",
          maxHeight: "360px",
          width: "100%",
          height: "auto",
        }),
      )}
      src={src}
    />
  );

  return (
    <div>
      {href
        ? (
          <a href={href}>
            {image}
          </a>
        )
        : image}
    </div>
  );
}
