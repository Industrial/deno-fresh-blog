import { Handlers, PageProps } from "$fresh/server.ts";

import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { Application } from "#/components/Application.tsx";
import { ArrayElement } from "#/lib/types.ts";
import { PostView } from "#/components/page/blog/PostView.tsx";
import { client, handleQueryResult } from "#/lib/graphql.ts";

export type Post = ArrayElement<PostQuery["post"]>;

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;

    if (!slug) {
      return ctx.renderNotFound();
    }

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

    const result = await client.query<PostQuery>({
      query: PostDocument,
      variables,
    });

    handleQueryResult<PostQuery>(result);

    const post = result.data.post[0];

    if (!post) {
      return ctx.renderNotFound();
    }

    return ctx.render(post);
  },
};

export default function PostViewPage({ data }: PageProps<Post>) {
  return (
    <Application>
      <PostView post={data} />
    </Application>
  );
}
