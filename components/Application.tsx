import { Children } from "#/lib/react.ts";
import { Navbar } from "#/components/Navbar.tsx";

export type ApplicationProps = {
  children?: Children;
};

export const Application = ({ children }: ApplicationProps) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
};
