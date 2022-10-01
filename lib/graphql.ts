import { useEffect, useRef, useState } from "preact/hooks";
import {
  DehydratedState,
  hydrate,
  QueryCache,
  QueryClient,
  QueryKey,
} from "react-query";

export type CreateGraphQLClientProps = {
  dehydratedState?: DehydratedState;
};

export function createGraphQLClient(
  { dehydratedState }: CreateGraphQLClientProps = {},
) {
  const queryCache = new QueryCache();

  const queryClient = new QueryClient({
    queryCache,
  });

  if (dehydratedState) {
    hydrate(queryClient, dehydratedState);
  }

  return queryClient;
}

export function getFetcherOptions() {
  return {
    // Since Deno Deploy doesn't do dynamic imports (yet), we can't ship code to
    // the client (via islands) that uses env vars.
    endpoint: "https://6m8s0kwh.directus.app/graphql",
    fetchParams: {
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${API_TOKEN}`,
      },
    },
  };
}

export function useQuery<Q, V>({
  client,
  fetcher,
  key,
  variables,
}: {
  client: QueryClient;
  fetcher: () => Promise<Q>;
  key: QueryKey;
  variables: V;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Q | null>(
    client.getQueryData<Q>(key) || null,
  );

  const firstRun = useRef<boolean>(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      if (data) {
        return;
      }
    }

    (async () => {
      try {
        setIsLoading(true);
        const newData = await client.fetchQuery<Q>(key, fetcher);
        setIsLoading(false);
        setError(null);
        setData(newData);
      } catch (error: unknown) {
        setIsLoading(false);
        setError(error as Error);
        setData(null);
      }
    })();
  }, [variables, firstRun]);

  return {
    isLoading,
    error,
    data,
  };
}
