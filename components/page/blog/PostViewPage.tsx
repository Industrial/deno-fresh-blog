import { DehydratedState } from "react-query";

import { Column } from "#/components/grid/Column.tsx";
import { Container } from "#/components/grid/Container.tsx";
import { PostContent } from "#/components/page/blog/PostContent.tsx";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";
import { createGraphQLClient } from "#/lib/graphql.ts";
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";
import { spacing } from "#/style/theme.ts";

export type PostViewPageProps = {
  slug: string;
  dehydratedState: DehydratedState;
};

export function PostViewPage({
  slug,
  dehydratedState,
}: PostViewPageProps) {
  const client = createGraphQLClient({ dehydratedState });
  const result = client.getQueryData<PostQuery>(
    usePostQuery.getKey({
      filter: {
        status: {
          _eq: "published",
        },
        slug: {
          _eq: slug,
        },
      },
      limit: 1,
      offset: 0,
    }),
  );

  const post = result?.post[0];

  if (!post) {
    return null;
  }

  return (
    <Container
      className={cx(
        css({
          ...smUp({
            marginTop: `${spacing(10)}px`,
          }),
        }),
      )}
    >
      <Column>
        <PostImage src="https://loremflickr.com/640/360" />
        <PostTitle
          text={post.title}
          className={cx(
            css({
              marginTop: "1em",
            }),
          )}
        />
        <PostDate
          date={new Date(post.date_created)}
          className={cx(
            css({
              marginTop: "1em",
            }),
          )}
        />
        <PostContent
          value={String(post.content)}
          className={cx(
            css({
              marginTop: "1em",
            }),
          )}
        />
      </Column>
    </Container>
  );
}
