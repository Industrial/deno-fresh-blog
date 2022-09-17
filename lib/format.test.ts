import { assertEquals } from "std/testing/asserts.ts";

import { formatDate } from "#/lib/format.ts";

Deno.test("formatDate", () => {
  const date = new Date("2022-01-01 00:00:00");

  const actual = formatDate(date);
  const expected = "01/01/22, 12:00 AM";

  assertEquals(expected, actual);
});
