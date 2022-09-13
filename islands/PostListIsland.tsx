import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { NormalizedCacheObject } from "@apollo/client";
import { useState } from "preact/hooks";

import { Container } from "#/components/Container.tsx";
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import { createApolloClient } from "#/lib/apollo.ts";
import { postQueryVariables } from "#/routes/index.tsx";

export type PostListProps = {
  data: NormalizedCacheObject;
};

export default function PostListIsland({ data }: PostListProps) {
  const [offset, setOffset] = useState<number>(postQueryVariables.offset || 0);

  const client = createApolloClient({
    isServer: !IS_BROWSER,
    initialData: data,
  });

  // Take the variables from the server side by default and update them using
  // client side state.
  const variables = {
    ...postQueryVariables,
    offset,
  };

  const postQuery = client.readQuery<PostQuery, PostQueryVariables>(
    {
      query: PostDocument,
      variables,
    },
  );

  const handleButttonClick = () => {
    setOffset(offset + 1);
  };

  return (
    <Container>
      <div className="mt-0 sm:mt-5 md:mt-10 xl:mt-40">
        <div className="flex flex-col">
          {postQuery?.post.map((entry) => {
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
