import { ArrayElement } from "#/lib/types.ts";
import { PostQuery } from "#/graphql/generated/client.ts";
import { formatDate } from "#/lib/format.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

function Photo({ post }: PostListEntryProps) {
  return (
    <div className="flex-1">
      <a href={`/post/${post.slug}`}>
        <img
          className="w-full xl:w-full xl:h-full sm:rounded-xl"
          src="https://loremflickr.com/640/360"
          width="640"
          height="360"
        />
      </a>
    </div>
  );
}

function Description({ post }: PostListEntryProps) {
  return (
    <div className="flex-1 flex mt-1 mb-5">
      <div className="flex-1 flex flex-col p-1 xl:p-16">
        <div className="flex-1">
          {formatDate(new Date(post.date_created))}
        </div>
        <div className="flex-1 font-bold text-2xl">
          <a href={`/post/${post.slug}`}>
            {post.title}
          </a>
        </div>
        <div className="flex-1">
          {post.intro || post.content}
        </div>
        <div className="flex-1">
          <a href={`/post/${post.slug}`}>Read more</a>
        </div>
      </div>
    </div>
  );
}

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <div className="flex flex-col xl:flex-row sm:mb-5 xl:mb-10">
      <Photo post={post} />
      <Description post={post} />
    </div>
  );
}
