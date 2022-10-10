import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type TitleProps = ClassNameProps & ChildrenProps & {
  variant?: "h1" | "h2" | "h3" | "h4";
};

export function Title({
  className,
  children,
  variant = "h1",
}: TitleProps): JSX.Element {
  const Component = variant;

  return (
    <Component className={className}>
      {children}
    </Component>
  );
}
