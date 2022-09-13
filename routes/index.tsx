import { NormalizedCacheObject } from "@apollo/client";
import { Handlers } from "$fresh/server.ts";

import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import PostListIsland from "#/islands/PostListIsland.tsx";
import { createApolloClient, handleQueryResult } from "#/lib/apollo.ts";
import { page } from "#/lib/page.tsx";

export type Posts = PostQuery["post"];

export const postQueryVariables: PostQueryVariables = {
  filter: {
    status: {
      _eq: "published",
    },
  },
  sort: ["-date_created"],
  limit: 1,
  offset: 0,
};

export const handler: Handlers<NormalizedCacheObject> = {
  async GET(_req, ctx) {
    const client = createApolloClient({
      isServer: true,
    });

    const result = await client.query<PostQuery>({
      query: PostDocument,
      variables: postQueryVariables,
    });
    handleQueryResult<PostQuery>(result);

    return ctx.render(client.extract());
  },
};

export default page(({ data }) => {
  return <PostListIsland data={data} />;
});
