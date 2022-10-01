import { DehydratedState } from "react-query";
import { useMemo, useState } from "preact/hooks";

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
import { Container } from "#/components/Container.tsx";
import { Button } from "#/components/Button.tsx";

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
    <Container>
      <div className="mt-0 xl:mt-40">
        <div className="flex flex-col">
          {query.data?.post.map((entry) => {
            return <PostListEntry post={entry} />;
          })}
        </div>
        <div>
          <Button
            variant="primary"
            onClick={handleButtonClick}
            disabled={query.isLoading}
          >
            Load More
          </Button>
        </div>
      </div>
    </Container>
  );
}
