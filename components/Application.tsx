import { NormalizedCacheObject } from "@apollo/client";

import { ApolloClient } from "#/contexts/ApolloClient.ts";
import { ChildrenProps } from "#/lib/children.ts";
import { Navbar } from "#/components/Navbar.tsx";
import { Router, RouterContextProps } from "#/contexts/Router.ts";
import { createApolloClient } from "#/lib/apollo.ts";

export type ApplicationProps = ChildrenProps & RouterContextProps & {
  data: NormalizedCacheObject;
};

export function Application(
  { children, params, route, url, data }: ApplicationProps,
) {
  const client = createApolloClient({
    isServer: true,
    initialData: data,
  });

  return (
    <Router.Provider
      value={{
        params,
        route,
        url,
      }}
    >
      <ApolloClient.Provider value={{ client }}>
        <>
          <Navbar />
          {children}
        </>
      </ApolloClient.Provider>
    </Router.Provider>
  );
}
