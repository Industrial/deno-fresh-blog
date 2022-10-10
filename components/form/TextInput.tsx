import { JSX } from "preact";
import { forwardRef } from "preact/compat";

import { InputBase, InputBaseProps } from "#/components/form/InputBase.tsx";

export type TextInputProps =
  & Omit<InputBaseProps, "Component">
  & JSX.HTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef(({
  required = false,
  children,
  ...props
}: TextInputProps, ref) => {
  return (
    <InputBase
      Component={"input"}
      type="text"
      required={required}
      {...props}
      ref={ref}
    >
      {children}
    </InputBase>
  );
});
