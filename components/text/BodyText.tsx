import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";

export type BodyTextProps = ChildrenProps & ClassNameProps;

export function BodyText({ children, className }: BodyTextProps) {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}
