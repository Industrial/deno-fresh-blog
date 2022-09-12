import { Handlers, PageProps } from "$fresh/server.ts";

import { Application } from "#/components/Application.tsx";
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { client, handleQueryResult } from "#/lib/graphql.ts";
import { PostList } from "#/components/page/blog/PostList.tsx";

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

export default function PostListPage(
  { params, route, url, data }: PageProps<PostQuery["post"]>,
) {
  return (
    <Application params={params} route={route} url={url}>
      <PostList posts={data} />
    </Application>
  );
}
