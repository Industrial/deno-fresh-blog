import { JSX } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { dehydrate, DehydratedState } from "react-query";

import {
  PostQueryVariables,
  usePostQuery,
} from "#/graphql/generated/client.ts";
import { createGraphQLClient, getFetcherOptions } from "#/lib/graphql.ts";
import { Application } from "#/components/Application.tsx";
import { PostViewPage } from "#/components/page/blog/PostViewPage.tsx";

export type PostViewPageProps = {
  slug: string;
  dehydratedState: DehydratedState;
};

export const handler: Handlers<PostViewPageProps> = {
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
      usePostQuery.fetcher(getFetcherOptions(), variables),
    );

    const post = result.post[0];

    if (!post) {
      return ctx.renderNotFound();
    }

    return ctx.render({
      slug,
      dehydratedState: dehydrate(client),
    });
  },
};

export default function PostView({
  params,
  route,
  url,
  data,
}: PageProps<PostViewPageProps>): JSX.Element {
  const { slug, dehydratedState } = data;

  return (
    <Application params={params} route={route} url={url} data={dehydratedState}>
      <PostViewPage slug={slug} dehydratedState={dehydratedState} />
    </Application>
  );
}
