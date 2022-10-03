import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";
import { css, cx } from "#/lib/emotion.ts";
import { smUp, xlUp } from "#/style/breakpoints.ts";
import { spacing } from "#/style/theme.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <div
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",

          ...smUp({
            marginTop: `${spacing(5)}px`,
          }),

          ...xlUp({
            flexDirection: "row",

            marginTop: `${spacing(10)}px`,
          }),
        }),
      )}
    >
      <div
        className={cx(
          css({
            flex: 1,
          }),
        )}
      >
        <PostImage
          href={`/post/${post.slug}`}
          src="https://loremflickr.com/640/360"
        />
      </div>
      <div
        className={cx(
          css({
            flex: 1,

            ...xlUp({
              paddingLeft: `var(--gutter)`,
            }),
          }),
        )}
      >
        <PostDate date={new Date(post.date_created)} />
        <PostTitle
          href={`/post/${post.slug}`}
          text={post.title}
          className={cx(
            css({}),
          )}
        />
        <BodyText>
          {String(post.intro)}
        </BodyText>
        <BodyText>
          <a href={`/post/${post.slug}`} className="text-underline">
            Read more
          </a>
        </BodyText>
      </div>
    </div>
  );
}
