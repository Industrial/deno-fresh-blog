import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps, withClassNames } from "#/lib/classNames.ts";

export type ContainerProps = ChildrenProps & ClassNameProps;

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      {...withClassNames(
        "container",
        "mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
