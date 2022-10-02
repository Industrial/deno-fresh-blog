import { DehydratedState } from "react-query";
import { useMemo, useState } from "preact/hooks";

import { Button } from "#/components/Button.tsx";
import { Container } from "../components/Container.tsx";
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
import { css, cx } from "#/lib/emotion.ts";
import { smUp } from "#/style/breakpoints.ts";
import { spacing } from "#/style/theme.ts";

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
    <Container
      className={cx(
        css({
          ...smUp({
            marginTop: `${spacing(10)}px`,
          }),
        }),
      )}
    >
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
    </Container>
  );
}
