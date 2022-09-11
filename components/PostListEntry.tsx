import { PostQuery } from "#/graphql/generated/client.ts";
import { ArrayElement } from "#/lib/types.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <div className="flex">
      <div className="flex">
        {post.title}
      </div>
      <div className="flex">
        {post.content}
      </div>
    </div>
  );
}
