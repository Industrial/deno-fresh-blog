import { ChildrenProps } from "#/lib/children.ts";
import { Navbar } from "#/components/Navbar.tsx";

export type ApplicationProps = ChildrenProps;

export function Application({ children }: ApplicationProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
