import { Handlers, PageProps } from "$fresh/server.ts";
import { dehydrate, DehydratedState } from "react-query";

import PostListIsland from "#/islands/PostListIsland.tsx";
import {
  PostQueryVariables,
  usePostQuery,
} from "#/graphql/generated/client.ts";
import { createGraphQLClient, getFetcherOptions } from "#/lib/graphql.ts";
import { Application } from "#/components/Application.tsx";

export type PostListPageProps = {
  dehydratedState: DehydratedState;
};

export default function PostListPage(
  { params, route, url, data }: PageProps<PostListPageProps>,
) {
  const { dehydratedState } = data;

  return (
    <Application params={params} route={route} url={url} data={dehydratedState}>
      <PostListIsland dehydratedState={dehydratedState} />
    </Application>
  );
}

export const handler: Handlers<PostListPageProps> = {
  async GET(_req, ctx) {
    const client = createGraphQLClient();

    const variables: PostQueryVariables = {
      filter: {
        status: {
          _eq: "published",
        },
      },
      sort: ["-date_created"],
      limit: 1,
      offset: 0,
    };

    const result = await client.fetchQuery(
      usePostQuery.getKey(variables),
      usePostQuery.fetcher(getFetcherOptions(), variables),
    );

    return ctx.render({
      dehydratedState: dehydrate(client),
    });
  },
};
