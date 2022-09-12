import { PageProps } from "$fresh/server.ts";
import { Application } from "#/components/Application.tsx";

export default function AboutPage(
  { params, route, url }: PageProps,
) {
  return (
    <Application params={params} route={route} url={url}>
      <h1>About</h1>
    </Application>
  );
}
