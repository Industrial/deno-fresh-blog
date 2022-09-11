import { PostQuery } from "#/graphql/generated/client.ts";
import { PostListEntry } from "#/components/PostListEntry.tsx";

export type PostListProps = {
  posts: PostQuery["post"];
};

export function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col">
      {posts.map((entry) => {
        return <PostListEntry post={entry} />;
      })}
    </div>
  );
}
