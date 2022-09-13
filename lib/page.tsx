import { NormalizedCacheObject } from "@apollo/client";
import { PageProps } from "$fresh/server.ts";

import { Application } from "#/components/Application.tsx";

export function page<T extends NormalizedCacheObject>(
  fn: (props: PageProps<T>) => JSX.Element,
) {
  return ({ params, route, url, data }: PageProps<T>) => {
    return (
      <Application params={params} route={route} url={url} data={data}>
        {fn({ params, route, url, data })}
      </Application>
    );
  };
}
