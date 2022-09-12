import { PageProps } from "$fresh/server.ts";
import { Application } from "#/components/Application.tsx";

export default function ContactPage(
  { params, route, url }: PageProps,
) {
  return (
    <Application params={params} route={route} url={url}>
      <h1>Contact</h1>
    </Application>
  );
}
