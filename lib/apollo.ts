import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

import { API_TOKEN, API_URL } from "#/lib/env.ts";

export type CreateApolloClientProps = {
  isServer: boolean;
  initialData?: NormalizedCacheObject;
};

export function createApolloClient(
  { isServer, initialData }: CreateApolloClientProps = { isServer: true },
) {
  const cache = new InMemoryCache();

  if (initialData) {
    cache.restore(initialData);
  }

  const client = new ApolloClient({
    uri: API_URL,
    headers: {
      // TODO: DO NOT expose this to the client.
      authorization: `Bearer ${API_TOKEN}`,
    },
    ssrMode: isServer,
    cache,
  });

  return client;
}

export function handleQueryResult<T>(result: ApolloQueryResult<T>) {
  const error = result.error || result.errors?.length && result.errors[0];

  if (error) {
    const newError = new Error(
      error.message,
      {
        cause: error.cause,
      },
    );

    console.error(newError);

    throw newError;
  }
}
