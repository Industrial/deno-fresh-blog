import { NormalizedCacheObject } from "@apollo/client";
import { Handlers } from "$fresh/server.ts";

import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { PostList } from "#/components/page/blog/PostList.tsx";
import { createApolloClient, handleQueryResult } from "#/lib/apollo.ts";
import { page } from "#/lib/page.tsx";

export type Posts = PostQuery["post"];

export const handler: Handlers<NormalizedCacheObject> = {
  async GET(_req, ctx) {
    const client = createApolloClient();

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

    return ctx.render(client.extract());
  },
};

export default page(() => {
  return <PostList />;
});
