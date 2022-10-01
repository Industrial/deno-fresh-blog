import { injectGlobal } from "#/lib/emotion.ts";

injectGlobal({
  // https://piccalil.li/blog/a-modern-css-reset/

  /* Box sizing rules */
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  /* Remove default margin */
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },

  /* Remove list styles on ul, ol elements with a list role, which suggests
   * default styling will be removed */
  "ul[role='list'], ol[role='list']": {
    listStyle: "none",
  },

  /* Set core root defaults */
  "html:focus-within": {
    scrollBehavior: "smooth",
  },

  /* Set core body defaults */
  "body": {
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    // lineHeight: 1.5,
  },

  /* A elements that don't have a class get default styles */
  "a:not([class])": {
    textDecorationSkipInk: "auto",
  },

  /* Make images easier to work with */
  "img, picture": {
    // I don't agree with this rule, so I turn it off.
    // maxWidth: "100%",
    display: "block",
  },

  /* Inherit fonts for inputs and buttons */
  "input, button, textarea, select": {
    font: "inherit",
  },

  /* Remove all animations, transitions and smooth scroll for people that prefer
   * not to see them */
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": {
      scrollBehavior: "auto",
    },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",

      // TODO: This gives me a type error.
      // scrollBehavior: "auto !important",
      scrollBehavior: "auto",
    },
  },
});

injectGlobal({
  "*": {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
