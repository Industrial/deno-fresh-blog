import { ApolloClient, InMemoryCache } from "@apollo/client";

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
