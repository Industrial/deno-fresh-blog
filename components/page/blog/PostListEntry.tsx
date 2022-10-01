import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { PostDate } from "#/components/page/blog/PostDate.tsx";
import { PostImage } from "#/components/page/blog/PostImage.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { PostTitle } from "#/components/page/blog/PostTitle.tsx";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <div className="flex flex-col xl:flex-row sm:mb-5 xl:mb-10">
      <div className="flex-1">
        <PostImage
          href={`/post/${post.slug}`}
          src="https://loremflickr.com/640/360"
        />
      </div>
      <div className="flex-1 flex mt-0 xl:mt-0 mb-5 md:mb-0">
        <div className="flex-1 flex flex-col p-1 xl:pl-16 xl:pr-0 xl:pt-0 xl:pb-0 justify-start">
          <PostDate date={new Date(post.date_created)} />
          <PostTitle href={`/post/${post.slug}`} text={post.title} />
          <BodyText>
            {String(post.intro)}
          </BodyText>
          <BodyText>
            <a href={`/post/${post.slug}`} className="text-underline">
              Read more
            </a>
          </BodyText>
        </div>
      </div>
    </div>
  );
}
