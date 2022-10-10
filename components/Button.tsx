import { JSX } from "preact";

import { ButtonBase, ButtonBaseProps } from "#/components/ButtonBase.tsx";

export type ButtonProps =
  & Omit<ButtonBaseProps, "Component">
  & JSX.HTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonBase Component={"button"} {...props}>
      {children}
    </ButtonBase>
  );
}
