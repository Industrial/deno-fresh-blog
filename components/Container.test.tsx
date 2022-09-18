import { expect } from "unittest";
import { JSDOM } from "npm:jsdom";
// import { DOMParser } from "deno_dom";
import { DOMParser } from "https://esm.sh/linkedom";
import { render, screen } from "@testing-library/preact";

import { Container } from "#/components/Container.tsx";

Deno.test("setup", (t) => {
  const { window: { document } } = new JSDOM(
    "<!DOCTYPE html>",
  );
  // const document = new DOMParser().parseFromString(
  //   "text/html",
  // );
  // if (!document) {
  //   throw new Error("Could not parse HTML document");
  // }
  globalThis.document = document;
  // globalThis.HTMLIFrameElement = document.window.HTMLIFrameElement;

  const testMessage = "Test Message";
  render(<Container>{testMessage}</Container>);

  expect(screen.queryByText(testMessage)).toBeDefined();
});
