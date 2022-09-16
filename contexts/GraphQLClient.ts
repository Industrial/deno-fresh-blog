import { QueryClient } from "react-query";
import { createContext } from "preact";

export const GraphQLClient = createContext<{ client: QueryClient | null }>({
  client: null,
});
