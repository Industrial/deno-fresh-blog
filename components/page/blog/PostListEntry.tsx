import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { Column } from "#/components/grid/Column.tsx";
import { Container } from "#/components/grid/Container.tsx";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";
import { column } from "#/style/grid.ts";
import { css, cx } from "#/lib/emotion.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <Container>
      <Column lg={6}>
        <PostImage
          href={`/post/${post.slug}`}
          src="https://loremflickr.com/640/360"
        />
      </Column>
      <Column lg={6}>
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
      </Column>
    </Container>
  );
}
