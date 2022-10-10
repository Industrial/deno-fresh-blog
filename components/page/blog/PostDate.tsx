import { formatDate } from "#/lib/format.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type PostDateProps = {
  date: Date;
} & ClassNameProps;

export function PostDate({
  date,
  className,
}: PostDateProps): JSX.Element {
  return (
    <div className={className}>
      {formatDate(date)}
    </div>
  );
}
