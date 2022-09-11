import { Handlers, PageProps } from "$fresh/server.ts";

import { Application } from "#/components/Application.tsx";
import {
  Post,
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { client } from "#/lib/graphql.ts";

export type Posts = Array<Post>;

export const handler: Handlers<PostQuery["post"]> = {
  async GET(_req, ctx) {
    // const variables: PostQueryVariables = {
    //   filter: {
    //     status: {
    //       _eq: "published",
    //     },
    //   },
    // };

    // const result = await client.query<PostQuery>({
    //   query: PostDocument,
    //   variables,
    // });

    // if (result.error || result.errors && result.errors[0]) {
    //   throw new Error(
    //     result.error?.message || result.errors && result.errors[0].message,
    //   );
    // }

    // const posts = result.data.post;

    // return ctx.render(posts);

    return ctx.render([]);
  },
};

export default function Home({ data }: PageProps<Posts>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      {
        /* {data.map((entry) => {
        return (
          <div>
            {entry.title}
          </div>
        );
      })} */
      }
    </div>
  );
}
