import { Handlers } from "$fresh/server.ts";

import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { ArrayElement } from "#/lib/types.ts";
import { PostView } from "#/components/page/blog/PostView.tsx";
import { createApolloClient, handleQueryResult } from "#/lib/apollo.ts";
import { page } from "#/lib/page.tsx";

export type Post = ArrayElement<PostQuery["post"]>;

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;

    if (!slug) {
      return ctx.renderNotFound();
    }

    const client = createApolloClient();

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

export default page<Post>(({ data }) => {
  return <PostView post={data} />;
});
