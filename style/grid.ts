import { CSSInterpolationObject } from "#/style/types.ts";
import { breakpoints, lgUp, mdUp, smUp, xlUp } from "#/style/breakpoints.ts";
import { injectGlobal } from "#/lib/emotion.ts";

export type ContainerProps = {
  maxWidth?: string;
  columns?: number;
  gutterWidth?: string;
};

injectGlobal({
  ":root": {
    "--grid-container-max-width": `${breakpoints.lg.upper}px`,
    "--grid-total-columns": 12,

    "--grid-gutter-width": `0px`,
    ...smUp({
      "--grid-gutter-width": `3vw`,
    }),
  },
});

export function container({
  maxWidth,
  gutterWidth,
}: ContainerProps): CSSInterpolationObject {
  return {
    ...(maxWidth && {
      "--grid-container-max-width": maxWidth,
    }),
    ...(gutterWidth && {
      "--grid-gutter-width": gutterWidth,
    }),

    display: "flex",
    flexWrap: "wrap",
    maxWidth: `var(--grid-container-max-width)`,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: `calc(var(--grid-gutter-width) / 2)`,
    paddingRight: `calc(var(--grid-gutter-width) / 2)`,
  };
}

export type RowProps = {
  gutterWidth?: string;
};

export function row({
  gutterWidth,
}: RowProps): CSSInterpolationObject {
  return {
    ...(gutterWidth && {
      "--grid-gutter-width": gutterWidth,
    }),

    display: "flex",
    flexWrap: "wrap",
    marginRight: `calc(var(--grid-gutter-width) / -2)`,
    marginLeft: `calc(var(--grid-gutter-width) / -2)`,
  };
}

export type ColumnProps = {
  columns?: number;
  gutterWidth?: string;
};

export function column({
  columns,
  gutterWidth,
}: ColumnProps): CSSInterpolationObject {
  return {
    ...(columns && {
      "--grid-total-columns": columns,
    }),
    ...(gutterWidth && {
      "--grid-gutter-width": gutterWidth,
    }),

    "--grid-columns": "var(--grid-columns-xs, --grid-total-columns)",

    display: "flex",
    flexBasis: "calc(var(--grid-columns) / var(--grid-total-columns) * 100%)",
    paddingLeft: `var(--grid-gutter-width)`,
    paddingRight: `var(--grid-gutter-width)`,

    ...smUp({
      "--grid-columns":
        "var(--grid-columns-sm, var(--grid-columns-xs, var(--grid-total-columns)))",
    }),

    ...mdUp({
      "--grid-columns":
        "var(--grid-columns-md, var(--grid-columns-sm, var(--grid-columns-xs, var(--grid-total-columns))))",
    }),

    ...lgUp({
      "--grid-columns":
        "var(--grid-columns-lg, var(--grid-columns-md, var(--grid-columns-sm, var(--grid-columns-xs, var(--grid-total-columns)))))",
    }),

    ...xlUp({
      "--grid-columns":
        "var(--grid-columns-xl, var(--grid-columns-lg, var(--grid-columns-md, var(--grid-columns-sm, var(--grid-columns-xs, var(--grid-total-columns))))))",
    }),
  };
}
