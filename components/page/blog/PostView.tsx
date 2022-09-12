import { ArrayElement } from "#/lib/types.ts";
import { BodyText } from "#/components/text/BodyText.tsx";
import { Container } from "#/components/Container.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { Title } from "#/components/text/Title.tsx";
import { formatDate } from "#/lib/format.ts";

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
            <Title>
              {post.title}
            </Title>
            <BodyText>
              <Markdown
                text={String(post.content)}
                className="flex flex-col gap-5"
              />
            </BodyText>
          </div>
        </>
      </Container>
    </div>
  );
}
