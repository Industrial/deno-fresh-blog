import { ChildrenProps } from "#/lib/children.ts";

export type ContainerProps = ChildrenProps;

export function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
}
