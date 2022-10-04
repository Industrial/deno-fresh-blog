import { DehydratedState } from "react-query";

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
      <PostTitle text={post.title} />
      <PostDate date={new Date(post.date_created)} />
      <PostImage src="https://loremflickr.com/640/360" />
      <PostContent value={String(post.content)} />
    </Container>
  );
}
