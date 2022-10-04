import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { css, cx } from "#/lib/emotion.ts";
import { row } from "#/style/grid.ts";

export type RowProps =
  & {
    gutterWidth?: string;
  }
  & ClassNameProps
  & ChildrenProps;

export function Row({
  gutterWidth,
  className,
  children,
}: RowProps) {
  return (
    <div
      className={cx(
        css({
          ...row({
            gutterWidth,
          }),
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
