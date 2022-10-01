import { formatDate } from "#/lib/format.ts";

export type PostDateProps = {
  date: Date;
};

export function PostDate({ date }: PostDateProps) {
  return (
    <div className="xl:mb-10">
      {formatDate(date)}
    </div>
  );
}
