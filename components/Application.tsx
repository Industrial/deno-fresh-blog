import { DehydratedState } from "react-query";

import { GraphQLClient } from "#/contexts/GraphQLClient.ts";
import { ChildrenProps } from "#/lib/types.ts";
import { Navbar } from "#/components/Navbar.tsx";
import { Router, RouterContextProps } from "#/contexts/Router.ts";
import { createGraphQLClient } from "#/lib/graphql.ts";

export type ApplicationProps = ChildrenProps & RouterContextProps & {
  data: DehydratedState;
};

export function Application(
  { children, params, route, url, data }: ApplicationProps,
) {
  const client = createGraphQLClient({
    dehydratedState: data,
  });

  return (
    <Router.Provider
      value={{
        params,
        route,
        url,
      }}
    >
      <GraphQLClient.Provider value={{ client }}>
        <>
          <Navbar />
          {children}
        </>
      </GraphQLClient.Provider>
    </Router.Provider>
  );
}
