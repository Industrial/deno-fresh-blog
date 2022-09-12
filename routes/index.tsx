import { Handlers, PageProps } from "$fresh/server.ts";

import { Application } from "#/components/Application.tsx";
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { client, handleQueryResult } from "#/lib/graphql.ts";
import { PostList } from "#/components/PostList.tsx";

export const handler: Handlers<PostQuery["post"]> = {
  async GET(_req, ctx) {
    const variables: PostQueryVariables = {
      filter: {
        status: {
          _eq: "published",
        },
      },
      sort: ["-date_created"],
      limit: 10,
      offset: 0,
    };

    const result = await client.query<PostQuery>({
      query: PostDocument,
      variables,
    });

    handleQueryResult<PostQuery>(result);

    const posts = result.data.post;

    return ctx.render(posts);
  },
};

export default function PostListPage({ data }: PageProps<PostQuery["post"]>) {
  return (
    <Application>
      <PostList posts={data} />
    </Application>
  );
}
