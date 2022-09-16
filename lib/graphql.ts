import { DehydratedState, hydrate, QueryCache, QueryClient } from "react-query";

import { API_TOKEN, API_URL } from "#/lib/env.ts";

export type CreateGraphQLClientProps = {
  data?: DehydratedState;
};

export function createGraphQLClient({ data }: CreateGraphQLClientProps = {}) {
  const queryCache = new QueryCache();

  const queryClient = new QueryClient({
    queryCache,
  });

  if (data) {
    hydrate(queryClient, data);
  }

  return queryClient;
}

export const fetcherOptions = {
  endpoint: API_URL,
  fetchParams: {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${API_TOKEN}`,
    },
  },
};
