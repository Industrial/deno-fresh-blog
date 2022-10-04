import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { Column, Row } from "#/components/grid/mod.ts";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <Row>
      <Column xl={6}>
        <PostImage
          href={`/post/${post.slug}`}
          src="https://loremflickr.com/640/360"
        />
      </Column>
      <Column xl={6}>
        <div
          className={cx(
            css({
              paddingLeft: "0.5vw",
              paddingRight: "0.5vw",
              ...smUp({
                paddingLeft: 0,
                paddingRight: 0,
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
      </Column>
    </Row>
  );
}
