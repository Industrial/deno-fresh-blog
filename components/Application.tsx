import { Children } from "#/lib/react.ts";

export type ApplicationProps = {
  children?: Children;
};

export const Application = ({ children }: ApplicationProps) => {
  return (
    <div>
      {children}
    </div>
  );
};
