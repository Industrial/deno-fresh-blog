import { DehydratedState } from "react-query";
import { useState } from "preact/hooks";

import { Container } from "#/components/Container.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import { createGraphQLClient } from "#/lib/graphql.ts";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";

export type PostListProps = {
  dehydratedState: DehydratedState;
};

export default function PostListIsland({ dehydratedState }: PostListProps) {
  const [offset, setOffset] = useState<number>(0);

  const handleButttonClick = () => {
    setOffset(offset + 1);
  };

  const client = createGraphQLClient({ dehydratedState });
  const result = client.getQueryData<PostQuery>(
    usePostQuery.getKey({
      filter: {
        status: {
          _eq: "published",
        },
      },
      sort: ["-date_created"],
      limit: 1,
      offset: 0,
    }),
  );

  if (!result) {
    return null;
  }

  return (
    <Container>
      <div className="mt-0 sm:mt-5 md:mt-10 xl:mt-40">
        <div className="flex flex-col">
          {result.post.map((entry) => {
            return <PostListEntry post={entry} />;
          })}
        </div>
        <div>
          <button onClick={handleButttonClick}>Load More</button>
        </div>
      </div>
    </Container>
  );
}
