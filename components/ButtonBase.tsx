import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { JSX } from "preact";
import { color, spacing } from "#/style/theme.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ButtonBaseProps =
  & {
    Component: JSX.ElementType;
    variant?: "primary" | "secondary" | "text";
  }
  & ClassNameProps
  & ChildrenProps;

export function ButtonBase({
  Component,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonBaseProps) {
  return (
    <Component
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
            border: `1px solid ${color.primary.dark}`,
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
      {...props}
    >
      {children}
    </Component>
  );
}
