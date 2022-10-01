import { DehydratedState } from "react-query";

import { BlogContainer } from "#/components/page/blog/BlogContainer.tsx";
import { PostContent } from "#/components/page/blog/PostContent.tsx";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";
import { createGraphQLClient } from "#/lib/graphql.ts";

export type PostViewProps = {
  slug: string;
  dehydratedState: DehydratedState;
};

export function PostView({ slug, dehydratedState }: PostViewProps) {
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
    <>
      <BlogContainer>
        <PostTitle text={post.title} />
        <PostDate date={new Date(post.date_created)} />
      </BlogContainer>
      <PostImage src="https://loremflickr.com/640/360" />
      <BlogContainer>
        <PostContent value={String(post.content)} />
      </BlogContainer>
    </>
  );
}
