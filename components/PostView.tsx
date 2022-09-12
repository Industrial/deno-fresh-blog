import { ArrayElement } from "#/lib/types.ts";
import { Container } from "#/components/Container.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { formatDate } from "#/lib/format.ts";
import { markdownToHTML } from "#/lib/markdown.ts";
import { Markdown } from "./Markdown.tsx";

export type PostViewProps = {
  post: ArrayElement<PostQuery["post"]>;
};

export function PostView({ post }: PostViewProps) {
  return (
    <div className="flex flex-col">
      <Container>
        <>
          <div>
            <img
              className="w-full xl:w-full xl:h-full"
              src="https://loremflickr.com/640/360"
              width="640"
              height="360"
            />
          </div>

          <div className="flex-1 flex flex-col pt-0 sm:pt-5 xl:pt-10 pl-1 sm:pl-0 pr-1 sm:pr-0 justify-start">
            <div className="">
              {formatDate(new Date(post.date_created))}
            </div>
            <div className="font-bold text-2xl">
              <a href={`/post/${post.slug}`}>
                {post.title}
              </a>
            </div>
            <Markdown text={String(post.content)} />
          </div>
        </>
      </Container>
    </div>
  );
}
