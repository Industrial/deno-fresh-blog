import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { breakpoints } from "#/style/breakpoints.ts";
import { css, cx } from "#/lib/emotion.ts";
// import { spacing } from "#/style/theme.ts";

export type ContainerProps = ClassNameProps & ChildrenProps;

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cx(
        css({
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          boxSizing: "border-box",
          maxWidth: breakpoints.md.upper,
          // ...smUp({
          //   paddingLeft: `var(--gutter)`,
          //   paddingRight: `var(--gutter)`,
          //   maxWidth: `${breakpoints.lg.upper}px`,
          // }),
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
