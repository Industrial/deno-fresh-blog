import { assertEquals } from "std/testing/asserts.ts";

import { QueryClient } from "react-query";
import { createGraphQLClient, getFetcherOptions } from "#/lib/graphql.ts";

Deno.test("createGraphQLClient", () => {
  const actual = createGraphQLClient() instanceof QueryClient;
  const expected = true;

  assertEquals(expected, actual);
});

Deno.test("getFetcherOptions", () => {
  const actual = getFetcherOptions();
  const expected = {
    endpoint: "https://6m8s0kwh.directus.app/graphql",
    fetchParams: {
      headers: {
        "content-type": "application/json",
      },
    },
  };

  assertEquals(expected, actual);
});
