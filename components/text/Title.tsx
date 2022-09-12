import { Children } from "#/lib/react.ts";

export type TitleProps = {
  children?: Children;
};

export function Title({ children }: TitleProps) {
  return (
    <div className="font-bold text-3xl lg:text-4xl xl:text-5xl">
      {children}
    </div>
  );
}
