export type PostImageProps = {
  href?: string;
  src: string;
};

export function PostImage({ href, src }: PostImageProps) {
  const image = (
    <img
      className="w-full xl:w-full xl:h-full"
      src={src}
      width="640"
      height="360"
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
