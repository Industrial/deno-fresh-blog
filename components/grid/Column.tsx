import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { column } from "#/style/grid.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ColumnProps =
  & {
    columns?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }
  & ClassNameProps
  & ChildrenProps;

export function Column({
  columns,
  xs = columns,
  sm = xs,
  md = sm,
  lg = md,
  xl = lg,
  className,
  children,
}: ColumnProps) {
  return (
    <div
      className={cx(
        css({
          ...(xs && {
            "--grid-columns-xs": xs,
          }),
          ...(sm && {
            "--grid-columns-sm": sm,
          }),
          ...(md && {
            "--grid-columns-md": md,
          }),
          ...(lg && {
            "--grid-columns-lg": lg,
          }),
          ...(xl && {
            "--grid-columns-xl": xl,
          }),
          ...column({ columns }),
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
