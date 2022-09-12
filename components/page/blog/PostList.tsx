import { Container } from "#/components/Container.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";

export type PostListProps = {
  posts: PostQuery["post"];
};

export function PostList({ posts }: PostListProps) {
  return (
    <Container>
      <div className="mt-0 sm:mt-5 md:mt-10 xl:mt-40">
        <div className="flex flex-col">
          {posts.map((entry) => {
            return <PostListEntry post={entry} />;
          })}
        </div>
      </div>
    </Container>
  );
}
