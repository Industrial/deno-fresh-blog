import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";

export type TitleProps = ClassNameProps & ChildrenProps & {
  variant?: "h1" | "h2" | "h3" | "h4";
};

export function Title({ className, children, variant = "h1" }: TitleProps) {
  const Component = variant;

  return (
    <Component className={className}>
      {children}
    </Component>
  );
}
