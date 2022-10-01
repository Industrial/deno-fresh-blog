import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";

export type TitleProps = ClassNameProps & ChildrenProps;

export function Title({ className, children }: TitleProps) {
  return (
    <span
      className={cx(
        css({
          fontWeight: "bold",
          fontSize: "24px",
          flex: 1,

          ...smUp({
            fontSize: "32px",
          }),
        }),
        className,
      )}
    >
      {children}
    </span>
  );
}
