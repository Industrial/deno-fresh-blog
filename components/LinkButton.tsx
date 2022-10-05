import { JSX } from "preact";

import { ButtonBase, ButtonBaseProps } from "#/components/ButtonBase.tsx";
import { css, cx } from "#/lib/emotion.ts";

export type LinkButtonProps =
  & Omit<ButtonBaseProps, "Component">
  & JSX.HTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  children,
  ...props
}: LinkButtonProps) {
  return (
    <ButtonBase
      className={cx(
        css({
          display: "inline-block",
          textDecoration: "none",
        }),
      )}
      Component={"a"}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
