import { DehydratedState } from "react-query";
import { useState } from "preact/hooks";

import { Container } from "#/components/Container.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import { postQueryVariables } from "#/graphql/queries/post.ts";
import { createGraphQLClient } from "#/lib/graphql.ts";
import { PostQuery, usePostQuery } from "#/graphql/generated/client.ts";

export type PostListProps = {
  data: DehydratedState;
};

export default function PostListIsland({ data }: PostListProps) {
  const [offset, setOffset] = useState<number>(postQueryVariables.offset || 0);

  const handleButttonClick = () => {
    setOffset(offset + 1);
  };

  const client = createGraphQLClient({ data });
  const result = client.getQueryData<PostQuery>(
    usePostQuery.getKey(postQueryVariables),
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
