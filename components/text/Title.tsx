import { Children } from "#/lib/react.ts";

export type TitleProps = {
  children?: Children;
  className?: string;
};

export function Title({ children, className }: TitleProps) {
  return (
    <div className={`font-bold text-3xl lg:text-4xl xl:text-5xl ${className}`}>
      {children}
    </div>
  );
}
