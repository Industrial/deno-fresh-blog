import { Children } from "#/lib/react.ts";
import { Container } from "#/components/Container.tsx";
import { Navbar } from "#/components/Navbar.tsx";

export type ApplicationProps = {
  children?: Children;
};

export function Application({ children }: ApplicationProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
