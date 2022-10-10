import { JSX } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { DehydratedState } from "react-query";

import { Application } from "#/components/Application.tsx";
import ContactFormIsland from "#/islands/ContactFormIsland.tsx";

export type ContactRouteProps = {
  dehydratedState: DehydratedState;
};
export const handler: Handlers<ContactRouteProps> = {
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

export default function ContactRoute({
  params,
  route,
  url,
  data,
}: PageProps<ContactRouteProps>): JSX.Element {
  const { dehydratedState } = data;

  return (
    <Application params={params} route={route} url={url} data={dehydratedState}>
      <ContactFormIsland dehydratedState={dehydratedState} />
    </Application>
  );
}
