import "#/style/global-styles.ts";

import { DehydratedState } from "react-query";

import { ChildrenProps } from "#/lib/types.ts";
import { Navbar } from "#/components/Navbar.tsx";
import { Router, RouterContextProps } from "#/contexts/Router.ts";

export type ApplicationProps = ChildrenProps & RouterContextProps & {
  data: DehydratedState;
};

export function Application(
  { children, params, route, url }: ApplicationProps,
) {
  return (
    <Router.Provider
      value={{
        params,
        route,
        url,
      }}
    >
      <Navbar />
      {children}
    </Router.Provider>
  );
}
