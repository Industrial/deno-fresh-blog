import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { container } from "#/style/grid.ts";
import { css, cx } from "#/lib/emotion.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type ContainerProps =
  & {
    maxWidth?: string;
    columns?: number;
    gutterWidth?: string;
  }
  & ClassNameProps
  & ChildrenProps;

export function Container({
  maxWidth,
  columns,
  gutterWidth,
  className,
  children,
}: ContainerProps): JSX.Element {
  return (
    <div
      className={cx(
        css({
          ...container({
            maxWidth,
            columns,
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
