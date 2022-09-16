import { Handlers } from "$fresh/server.ts";
import { dehydrate, DehydratedState } from "react-query";

import PostListIsland from "#/islands/PostListIsland.tsx";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";
import { createGraphQLClient, fetcherOptions } from "#/lib/graphql.ts";
import { page } from "#/lib/page.tsx";
import { postQueryVariables } from "#/graphql/queries/post.ts";

export type Posts = PostQuery["post"];

export const handler: Handlers<DehydratedState> = {
  async GET(_req, ctx) {
    const client = createGraphQLClient();

    const result = await client.fetchQuery(
      usePostQuery.getKey(postQueryVariables),
      usePostQuery.fetcher(fetcherOptions, postQueryVariables),
    );

    return ctx.render(dehydrate(client));
  },
};

export default page(({ data }) => {
  return <PostListIsland data={data} />;
});
