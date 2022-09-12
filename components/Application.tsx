import { ChildrenProps } from "#/lib/children.ts";
import { Navbar } from "#/components/Navbar.tsx";
import { Router, RouterContextProps } from "#/contexts/Router.ts";

export type ApplicationProps = ChildrenProps & RouterContextProps;

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
