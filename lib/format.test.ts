import { assertEquals } from "std/testing/asserts.ts";

import { formatDate } from "#/lib/format.ts";

Deno.test("formatDate (default locale)", () => {
  const date = new Date("2022-01-02 01:02:03");

  const actual = formatDate(date);
  const expected = "01/02/22, 01:02 AM";

  assertEquals(expected, actual);
});

Deno.test("formatDate (dutch locale)", () => {
  const date = new Date("2022-01-02 01:02:03");

  const actual = formatDate(date, "nl-NL");
  const expected = "02-01-22 01:02";

  assertEquals(expected, actual);
});
