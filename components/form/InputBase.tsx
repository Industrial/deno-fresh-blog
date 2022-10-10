import { JSX } from "preact";
import { forwardRef } from "preact/compat";

import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { css, cx } from "#/lib/emotion.ts";
import { color } from "#/style/theme.ts";

export type InputBaseProps =
  & {
    Component: JSX.ElementType;
    name?: string;
    label?: string;
    required?: boolean;
    error?: string;
  }
  & ClassNameProps
  & ChildrenProps;

export const InputBase = forwardRef(({
  Component,
  name,
  label,
  required = false,
  error,
  className,
  children,
  ...props
}: InputBaseProps, ref) => {
  return (
    <>
      {label && (
        <label for={name}>
          <strong>
            {label}
            {required && (
              <>
                {" "}
                <span
                  className={cx(
                    css({
                      color: color.warning.main,
                    }),
                  )}
                >
                  *
                </span>
              </>
            )}
          </strong>
        </label>
      )}
      <Component
        id={name}
        name={name}
        required={required}
        className={cx(className)}
        {...props}
        ref={ref}
      >
        {children}
      </Component>
      {error && (
        <div
          className={cx(
            css({
              color: color.warning.main,
            }),
          )}
        >
          {error}
        </div>
      )}
    </>
  );
});
