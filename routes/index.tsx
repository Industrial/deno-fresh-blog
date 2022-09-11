import { Handlers, PageProps } from "$fresh/server.ts";

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
    const variables: PostQueryVariables = {
      filter: {
        status: {
          _eq: "published",
        },
      },
    };

    const result = await client.query<PostQuery>({
      query: PostDocument,
      variables,
    });

    // const error = result.error || result.errors?.length && result.errors[0];

    // if (error) {
    //   const newError = new Error(
    //     error.message,
    //     {
    //       cause: error.cause,
    //     },
    //   );

    //   console.error(newError);

    //   throw newError;
    // }

    const posts = result.data.post;

    return ctx.render(posts);
  },
};

export default function Home({ data }: PageProps<Posts>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      {data.map((entry) => {
        return (
          <div>
            {entry.title}
          </div>
        );
      })}
    </div>
  );
}
