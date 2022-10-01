import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { breakpoints, smUp } from "#/style/breakpoints.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ContainerProps = ChildrenProps & ClassNameProps;

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cx(
        css({
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          boxSizing: "border-box",
          width: "100%",

          ...smUp({
            maxWidth: `${breakpoints.lg.upper}px`,
          }),
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
