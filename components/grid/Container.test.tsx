import "npm:global-jsdom/register";

import { expect } from "unittest";
import { JSDOM } from "npm:jsdom";
// import { DOMParser } from "deno_dom";
import { render, screen } from "@testing-library/preact";

import { Container } from "#/components/grid/Container.tsx";

Deno.test("setup", (t) => {
  const html = "<!DOCTYPE html>";
  const dom = new JSDOM(html);
  // const document = new DOMParser().parseFromString(html, "text/html");
  // if (!document) {
  //   throw new Error("Could not parse HTML document");
  // }
  console.log("global", globalThis);
  console.log("document", dom.window.document);
  // window.document = dom.window.document;
  // globalThis.window = dom.window;
  // globalThis.window.document = dom.window.document;
  // globalThis.document = dom.window.document;
  // globalThis.HTMLIFrameElement = document.window.HTMLIFrameElement;

  // const testMessage = "Test Message";
  // render(<Container>{testMessage}</Container>, {
  //   baseElement: dom.window.document.body,
  // });

  // expect(screen.queryByText(testMessage)).toBeDefined();
});
