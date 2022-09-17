import { assertEquals } from "std/testing/asserts.ts";

import { markdownToHTML } from "#/lib/markdown.ts";

Deno.test("markdownToHTML", () => {
  const actual = markdownToHTML("# Hi!");
  const expected = "<h1>Hi!</h1>\n";

  assertEquals(expected, actual);
});
