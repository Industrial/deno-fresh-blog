import { DehydratedState } from "react-query";

import { BodyText } from "#/components/text/BodyText.tsx";
import { Container } from "#/components/Container.tsx";
import { Markdown } from "#/components/text/Markdown.tsx";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";
import { Title } from "#/components/text/Title.tsx";
import { createGraphQLClient } from "#/lib/graphql.ts";
import { formatDate } from "#/lib/format.ts";

export type PostViewProps = {
  slug: string;
  dehydratedState: DehydratedState;
};

export function PostView({ slug, dehydratedState }: PostViewProps) {
  const client = createGraphQLClient({ dehydratedState });
  const result = client.getQueryData<PostQuery>(
    usePostQuery.getKey({
      filter: {
        status: {
          _eq: "published",
        },
        slug: {
          _eq: slug,
        },
      },
      limit: 1,
      offset: 0,
    }),
  );

  const post = result?.post[0];

  if (!post) {
    return null;
  }

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
            <Title className="pb-1 sm:pb-2 md:pb-3 xl:pb-5">
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
