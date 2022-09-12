import { Handlers } from "$fresh/server.ts";

import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { PostList } from "#/components/page/blog/PostList.tsx";
import { client, handleQueryResult } from "#/lib/graphql.ts";
import { page } from "#/lib/page.tsx";

export type Posts = PostQuery["post"];

export const handler: Handlers<Posts> = {
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

export default page<Posts>(({ data }) => {
  return <PostList posts={data} />;
});
