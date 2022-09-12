import { createContext } from "preact";

export type RouterContextProps = {
  params: Record<string, string>;
  route: string;
  url: URL;
};

export function getRouterContextDefaults(): RouterContextProps {
  return {
    params: {},
    route: "",
    url: new URL("https://deno.com"),
  };
}

export const Router = createContext<RouterContextProps>(
  getRouterContextDefaults(),
);
