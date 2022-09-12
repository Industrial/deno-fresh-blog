import { ChildrenProps } from "#/lib/children.ts";
import { ClassNameProps, withClassNames } from "#/lib/classNames.ts";

export type TitleProps = ClassNameProps & ChildrenProps;

export function Title({ className, children }: TitleProps) {
  return (
    <div
      {...withClassNames(
        "font-bold",
        "text-3xl",
        "lg:text-4xl",
        "xl:text-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
