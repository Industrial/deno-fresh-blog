import { formatDate } from "#/lib/format.ts";
import { ClassNameProps } from "#/lib/classNames.ts";

export type PostDateProps = {
  date: Date;
} & ClassNameProps;

export function PostDate({ date, className }: PostDateProps) {
  return (
    <div className={className}>
      {formatDate(date)}
    </div>
  );
}
