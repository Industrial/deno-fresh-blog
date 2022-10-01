import { ChildrenProps } from "#/lib/types.ts";
import { breakpoints, tabletPortraitUp } from "#/style/breakpoints.ts";
import { css, cx } from "#/lib/emotion.ts";
import { color, spacing } from "#/style/theme.ts";
import { JSXInternal } from "https://esm.sh/v94/preact@10.10.6/src/jsx.d.ts";

export type ButtonProps =
  & ChildrenProps
  & JSXInternal.HTMLAttributes<HTMLButtonElement>
  & {
    variant?: "primary" | "secondary" | "text";
  };

export function Button(
  { children, variant = "primary", ...props }: ButtonProps,
) {
  return (
    <button
      className={cx(css({
        display: "block",
        padding: `${spacing(1)}px`,

        borderRadius: `5px`,
        color: color.white,

        ...(variant === "primary" && {
          backgroundColor: color.primary.main,
          border: `1px solid ${color.primary.dark}`,
        }),

        ...(variant === "secondary" && {
          backgroundColor: color.secondary.main,
          border: `1px solid ${color.secondary.dark}`,
        }),

        ...(variant === "text" && {
          color: color.primary.main,
          background: "none",
          border: "none",
        }),

        "&:hover": {
          cursor: "pointer",

          ...(variant === "primary" && {
            backgroundColor: color.primary.light,
          }),

          ...(variant === "secondary" && {
            backgroundColor: color.secondary.light,
          }),

          ...(variant === "text" && {
            color: color.primary.light,
          }),
        },

        "&:focus": {
          ...(variant === "primary" && {
            backgroundColor: color.primary.light,
          }),

          ...(variant === "secondary" && {
            backgroundColor: color.secondary.light,
          }),
        },

        "&:active": {
          ...(variant === "primary" && {
            backgroundColor: color.primary.dark,
          }),

          ...(variant === "secondary" && {
            backgroundColor: color.secondary.dark,
          }),

          ...(variant === "text" && {
            color: color.primary.dark,
          }),
        },
      }))}
      {...props}
    >
      {children}
    </button>
  );
}
