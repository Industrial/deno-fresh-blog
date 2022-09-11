import { ApolloClient, InMemoryCache } from "@apollo/client";

import { API_TOKEN, API_URL } from "#/lib/env.ts";

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
