import { DehydratedState } from "react-query";
import { useMemo, useState } from "preact/hooks";

import { PostListPage } from "#/components/page/blog/PostListPage.tsx";
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

  return <PostListPage query={query} onLoadMore={handleButtonClick} />;
}
