import { JSX } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { DehydratedState } from "react-query";

import { Application } from "#/components/Application.tsx";

export type AboutPageProps = {
  dehydratedState: DehydratedState;
};

export default function PostListPage({
  params,
  route,
  url,
  data,
}: PageProps<AboutPageProps>): JSX.Element {
  const { dehydratedState } = data;

  return (
    <Application params={params} route={route} url={url} data={dehydratedState}>
      <h1>About</h1>
    </Application>
  );
}

export const handler: Handlers<AboutPageProps> = {
  // deno-lint-ignore require-await
  async GET(_req, ctx) {
    return ctx.render({
      dehydratedState: {
        mutations: [],
        queries: [],
      },
    });
  },
};
