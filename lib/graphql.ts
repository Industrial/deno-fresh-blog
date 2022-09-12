import { ApolloClient, ApolloQueryResult, InMemoryCache } from "@apollo/client";

import { API_TOKEN, API_URL } from "#/lib/env.ts";

export const options = {
  uri: API_URL,
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
};

export const client = new ApolloClient({
  ...options,
  cache: new InMemoryCache(),
});

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
