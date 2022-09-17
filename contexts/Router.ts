import { createContext } from "preact";

export type RouterContextProps = {
  params: Record<string, string>;
  route: string;
  url: URL;
};

export const Router = createContext<RouterContextProps>({
  params: {},
  route: "",
  url: new URL("https://deno.com"),
});
