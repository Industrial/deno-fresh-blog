import { Children } from "#/lib/react.ts";

export type BodyTextProps = {
  children?: Children;
};

export function BodyText({ children }: BodyTextProps) {
  return (
    <div className="font-normal lg:text-lg xl:text-xl">
      {children}
    </div>
  );
}
