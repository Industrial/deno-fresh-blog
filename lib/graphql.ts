import { DehydratedState, hydrate, QueryCache, QueryClient } from "react-query";

export type CreateGraphQLClientProps = {
  dehydratedState?: DehydratedState;
};

export function createGraphQLClient(
  { dehydratedState }: CreateGraphQLClientProps = {},
) {
  const queryCache = new QueryCache();

  const queryClient = new QueryClient({
    queryCache,
  });

  if (dehydratedState) {
    hydrate(queryClient, dehydratedState);
  }

  return queryClient;
}

export function getFetcherOptions() {
  return {
    // Since Deno Deploy doesn't do dynamic imports (yet), we can't ship code to
    // the client (via islands) that uses env vars.
    endpoint: "https://6m8s0kwh.directus.app/graphql",
    fetchParams: {
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${API_TOKEN}`,
      },
    },
  };
}
