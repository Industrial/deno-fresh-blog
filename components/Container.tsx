import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { breakpoints, tabletPortraitUp } from "#/style/breakpoints.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ContainerProps = ChildrenProps & ClassNameProps;

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={cx(css({
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: "border-box",
        width: "100%",

        ...tabletPortraitUp({
          maxWidth: `${breakpoints.desktop.upper}px`,
        }),
      }))}
    >
      {children}
    </div>
  );
}
