import { assertEquals } from "std/testing/asserts.ts";

import { classNames, withClassNames } from "#/lib/classNames.ts";

Deno.test("classNames without arguments", () => {
  const actual = classNames();
  const expected = "";

  assertEquals(expected, actual);
});

Deno.test("classNames with one argument", () => {
  const actual = classNames("a");
  const expected = "a";

  assertEquals(expected, actual);
});

Deno.test("classNames with multiple arguments", () => {
  const actual = classNames("a", "b");
  const expected = "a b";

  assertEquals(expected, actual);
});

Deno.test("withClassNames without arguments", () => {
  const actual = withClassNames();
  const expected = {
    className: "",
  };

  assertEquals(expected, actual);
});

Deno.test("withClassNames with one argument", () => {
  const actual = withClassNames("a");
  const expected = {
    className: "a",
  };

  assertEquals(expected, actual);
});

Deno.test("withClassNames with multiple arguments", () => {
  const actual = withClassNames("a", "b");
  const expected = {
    className: "a b",
  };

  assertEquals(expected, actual);
});
