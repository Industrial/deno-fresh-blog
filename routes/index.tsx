import { Handlers } from "$fresh/server.ts";

import Counter from "#/islands/Counter.tsx";
import { Application } from "#/components/Application.tsx";
import {
  Post,
  PostDocument,
  PostQuery,
  usePostQuery,
} from "#/graphql/generated/client.ts";
import { client } from "#/lib/graphql.ts";

export type Posts = Array<Post>;

export const handler: Handlers<Posts> = {
  async GET(_req, ctx) {
    const result = await client.query<PostQuery>({
      query: PostDocument,
      // variables: {
      // }
    });

    console.log("result", result);

    return ctx.render([]);
  },
};

export default function Home() {
  const { loading, error, data } = usePostQuery();

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <Application>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          <pre>
            {JSON.stringify(data)}
          </pre>
        </p>
        <Counter start={3} />
      </div>
    </Application>
  );
}
