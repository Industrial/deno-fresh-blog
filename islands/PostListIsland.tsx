import { DehydratedState } from "react-query";
import { useMemo, useState } from "preact/hooks";

import { BlogContainer } from "#/components/page/blog/BlogContainer.tsx";
import { Button } from "#/components/Button.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import {
  PostQuery,
  PostQueryVariables,
  usePostQuery,
} from "#/graphql/generated/client.ts";
import {
  createGraphQLClient,
  getFetcherOptions,
  useQuery,
} from "#/lib/graphql.ts";

export type PostListIslandProps = {
  dehydratedState: DehydratedState;
};

export default function PostListIsland(
  { dehydratedState }: PostListIslandProps,
) {
  const client = useMemo(() => {
    return createGraphQLClient({ dehydratedState });
  }, [dehydratedState]);
  const [limit, setLimit] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const queryVariables = useMemo(() => {
    return {
      filter: {
        status: {
          _eq: "published",
        },
      },
      sort: ["-date_created"],
      limit,
      offset,
    };
  }, [offset, limit]);

  const query = useQuery<PostQuery, PostQueryVariables>({
    client,
    fetcher: usePostQuery.fetcher(getFetcherOptions(), queryVariables),
    key: usePostQuery.getKey(queryVariables),
    variables: queryVariables,
  });

  function handleButtonClick() {
    setLimit(limit + 1);
  }

  return (
    <BlogContainer>
      {query.data?.post.map((entry) => {
        return <PostListEntry post={entry} />;
      })}
      <Button
        variant="primary"
        onClick={handleButtonClick}
        disabled={query.isLoading}
      >
        Load More
      </Button>
    </BlogContainer>
  );
}
