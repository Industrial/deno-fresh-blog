import { Children } from "#/lib/react.ts";

export type ContainerProps = {
  children?: Children;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
}
