import { Handlers } from "$fresh/server.ts";
import { dehydrate, DehydratedState } from "react-query";

import { API_TOKEN, API_URL } from "#/lib/env.ts";
import { ArrayElement } from "#/lib/types.ts";
import {
  PostQuery,
  PostQueryVariables,
  usePostQuery,
} from "#/graphql/generated/client.ts";
import { PostView } from "#/components/page/blog/PostView.tsx";
import { createGraphQLClient } from "#/lib/graphql.ts";
import { page } from "#/lib/page.tsx";

export type Post = ArrayElement<PostQuery["post"]>;

export const handler: Handlers<DehydratedState> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;

    if (!slug) {
      return ctx.renderNotFound();
    }

    const client = createGraphQLClient();

    const variables: PostQueryVariables = {
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
    };

    const result = await client.fetchQuery(
      usePostQuery.getKey(variables),
      usePostQuery.fetcher({
        endpoint: API_URL,
        fetchParams: {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        },
      }, variables),
    );

    const post = result.post[0];

    if (!post) {
      return ctx.renderNotFound();
    }

    return ctx.render(dehydrate(client));
  },
};

export default page(({ data }) => {
  return <PostView post={data} />;
});
