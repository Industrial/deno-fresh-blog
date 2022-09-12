import { ChildrenProps } from "#/lib/children.ts";

export type BodyTextProps = ChildrenProps;

export function BodyText({ children }: BodyTextProps) {
  return (
    <div className="font-normal lg:text-lg xl:text-xl">
      {children}
    </div>
  );
}
