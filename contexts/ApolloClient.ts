import {
  ApolloClient as AApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { createContext } from "preact";
import { createApolloClient } from "#/lib/apollo.ts";

export const ApolloClient = createContext<{
  client: AApolloClient<NormalizedCacheObject>;
}>({
  client: createApolloClient(),
});
