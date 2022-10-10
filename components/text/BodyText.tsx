import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type BodyTextProps = ChildrenProps & ClassNameProps;

export function BodyText({
  children,
  className,
}: BodyTextProps): JSX.Element {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}
