import { PageProps } from "$fresh/server.ts";

import { Application } from "#/components/Application.tsx";

export function page<T>(fn: (props: PageProps<T>) => JSX.Element) {
  return ({ params, route, url, data }: PageProps<T>) => {
    return (
      <Application params={params} route={route} url={url}>
        {fn({ params, route, url, data })}
      </Application>
    );
  };
}
