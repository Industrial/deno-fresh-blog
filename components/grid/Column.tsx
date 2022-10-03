import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { column } from "#/style/grid.ts";
import { css, cx } from "#/lib/emotion.ts";

export type ColumnProps = ClassNameProps & ChildrenProps & {
  totalColumns?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export function Column({
  className,
  children,
  totalColumns = 12,
  xs = totalColumns,
  sm = xs,
  md = sm,
  lg = md,
  xl = lg,
}: ColumnProps) {
  return (
    <div
      className={cx(
        css({
          "--columns-xs": xs,
          "--columns-sm": sm,
          "--columns-md": md,
          "--columns-lg": lg,
          "--columns-xl": xl,
          ...column(totalColumns),
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
