import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { css, cx } from "#/lib/emotion.ts";
import { row } from "#/style/grid.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

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
}: RowProps): JSX.Element {
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
