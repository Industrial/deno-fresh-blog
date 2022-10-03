import { lgUp, mdUp, smUp, xlUp } from "#/style/breakpoints.ts";

// TODO: Gutter
// TODO: Offset
export function column(columns = 12) {
  return {
    "--total-columns": columns,
    "--columns": "var(--columns-xs, --total-columns)",
    flexBasis: "calc(var(--columns) / var(--total-columns) * 100%)",

    ...smUp({
      "--columns":
        "var(--columns-sm, var(--columns-xs, var(--columns-default)))",
    }),

    ...mdUp({
      "--columns":
        "var(--columns-md, var(--columns-sm, var(--columns-xs, var(--columns-default))))",
    }),

    ...lgUp({
      "--columns":
        "var(--columns-lg, var(--columns-md, var(--columns-sm, var(--columns-xs, var(--columns-default)))))",
    }),

    ...xlUp({
      "--columns":
        "var(--columns-xl, var(--columns-lg, var(--columns-md, var(--columns-sm, var(--columns-xs, var(--columns-default))))))",
    }),
  };
}
