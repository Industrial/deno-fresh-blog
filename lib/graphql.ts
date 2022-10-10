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

export type UseQueryProps<Query, Variables> = {
  client: QueryClient;
  fetcher: () => Promise<Query>;
  key: QueryKey;
  variables: Variables;
};

export type UseQuery<Query> = {
  isLoading: boolean;
  error: Error | null;
  data: Query | null;
};

export function useQuery<Query, Variables>({
  client,
  fetcher,
  key,
  variables,
}: UseQueryProps<Query, Variables>): UseQuery<Query> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Query | null>(
    client.getQueryData<Query>(key) || null,
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
        const newData = await client.fetchQuery<Query>(key, fetcher);
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

export type UseMutationProps = {
  client: QueryClient;
};

export type UseMutation<Mutation, Variables> = {
  isLoading: boolean;
  error: Error | null;
  mutate: (variables: Variables) => Promise<Mutation | null>;
};

export function useMutation<Mutation, Variables>(
  { client }: UseMutationProps,
): UseMutation<Mutation, Variables> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (variables: Variables) => {
    try {
      setIsLoading(true);
      const newData = await client.executeMutation<
        Mutation,
        unknown,
        Variables
      >({
        variables,
      });
      setIsLoading(false);
      setError(null);
      return newData;
    } catch (error: unknown) {
      setIsLoading(false);
      setError(error as Error);
      return null;
    }
  };

  return {
    isLoading,
    error,
    mutate,
  };
}
