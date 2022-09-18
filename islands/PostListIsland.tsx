import { DehydratedState } from "react-query";
import { useMemo, useState } from "preact/hooks";

import { Container } from "#/components/Container.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import {
  createGraphQLClient,
  getFetcherOptions,
  useQuery,
} from "#/lib/graphql.ts";
import {
  PostQuery,
  PostQueryVariables,
  usePostQuery,
} from "#/graphql/generated/client.ts";

export type PostListProps = {
  dehydratedState: DehydratedState;
};

export default function PostListIsland({ dehydratedState }: PostListProps) {
  const client = useMemo(() => {
    return createGraphQLClient({ dehydratedState });
  }, [dehydratedState]);
  const [offset, setOffset] = useState<number>(0);
  const queryVariables = useMemo(() => {
    return {
      filter: {
        status: {
          _eq: "published",
        },
      },
      sort: ["-date_created"],
      limit: 1,
      offset,
    };
  }, [offset]);

  const query = useQuery<PostQuery, PostQueryVariables>({
    client,
    fetcher: usePostQuery.fetcher(getFetcherOptions(), queryVariables),
    key: usePostQuery.getKey(queryVariables),
    variables: queryVariables,
  });

  function handleButtonClick() {
    setOffset(offset + 1);
  }

  if (!query) {
    return null;
  }

  return (
    <Container>
      <div className="mt-0 sm:mt-5 md:mt-10 xl:mt-40">
        <div className="flex flex-col">
          {query.post.map((entry) => {
            return <PostListEntry post={entry} />;
          })}
        </div>
        <div>
          <button onClick={handleButtonClick}>Load More</button>
        </div>
      </div>
    </Container>
  );
}
