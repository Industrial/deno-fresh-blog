import { JSXInternal } from "https://esm.sh/v94/preact@10.10.6/src/jsx.d.ts";

import { ChildrenProps } from "#/lib/types.ts";
import { color, spacing } from "#/style/theme.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ButtonProps =
  & {
    variant?: "primary" | "secondary" | "text";
  }
  & ChildrenProps
  & JSXInternal.HTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        css({
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

          "&:disabled": {
            backgroundColor: color.action.disabled.background,
            border: `1px solid ${color.action.disabled.border}`,
            color: color.action.disabled.text,
          },

          "&:enabled:hover": {
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

          "&:enabled:active": {
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
        }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
