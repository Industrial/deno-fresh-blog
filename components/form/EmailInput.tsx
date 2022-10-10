import { JSX } from "preact";
import { forwardRef } from "preact/compat";

import { InputBase, InputBaseProps } from "#/components/form/InputBase.tsx";

export type EmailInputProps =
  & Omit<InputBaseProps, "Component">
  & JSX.HTMLAttributes<HTMLInputElement>;

export const EmailInput = forwardRef(({
  required = false,
  children,
  ...props
}: EmailInputProps, ref) => {
  return (
    <InputBase
      Component={"input"}
      type="email"
      required={required}
      {...props}
      ref={ref}
    >
      {children}
    </InputBase>
  );
});
