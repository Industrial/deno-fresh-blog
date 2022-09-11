import { ApolloProvider } from "@apollo/client";
import { client } from "#/lib/graphql.ts";
import { Children } from "#/lib/react.ts";

export type ApplicationProps = {
  children?: Children;
};

export const Application = ({ children }: ApplicationProps) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};
