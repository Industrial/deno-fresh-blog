import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { Title } from "#/components/text/Title.tsx";
import { formatDate } from "#/lib/format.ts";

export type PostListEntryProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostListEntry({ post }: PostListEntryProps) {
  return (
    <div className="flex flex-col xl:flex-row sm:mb-5 xl:mb-10">
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
      <div className="flex-1 flex mt-1 md:mt-0 mb-5 md:mb-0">
        <div className="flex-1 flex flex-col p-1 xl:pl-16 xl:pr-0 xl:pt-0 xl:pb-0 justify-start">
          <div className="">
            {formatDate(new Date(post.date_created))}
          </div>
          <Title>
            <a href={`/post/${post.slug}`}>
              {post.title}
            </a>
          </Title>
          <BodyText>
            <Markdown text={String(post.intro || post.content)} />
          </BodyText>
          <div className="">
            <a href={`/post/${post.slug}`} className="text-underline">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
