import { JSX } from "preact";
import { forwardRef } from "preact/compat";

import { InputBase, InputBaseProps } from "#/components/form/InputBase.tsx";

export type TextareaInputProps =
  & Omit<InputBaseProps, "Component">
  & JSX.HTMLAttributes<HTMLInputElement>;

export const TextareaInput = forwardRef(({
  required = false,
  children,
  ...props
}: TextareaInputProps, ref) => {
  return (
    <InputBase Component={"textarea"} required={required} {...props} ref={ref}>
      {children}
    </InputBase>
  );
});
