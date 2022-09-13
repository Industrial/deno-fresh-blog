import { Container } from "#/components/Container.tsx";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from "#/graphql/generated/client.ts";
import { ApolloClient } from "#/contexts/ApolloClient.ts";

export function PostList() {
  return (
    <ApolloClient.Consumer>
      {({ client }) => {
        const postQuery = client.readQuery<PostQuery, PostQueryVariables>(
          {
            query: PostDocument,
            variables: {
              filter: {
                status: {
                  _eq: "published",
                },
              },
              sort: ["-date_created"],
              limit: 10,
              offset: 0,
            },
          },
        );

        return (
          <Container>
            <div className="mt-0 sm:mt-5 md:mt-10 xl:mt-40">
              <div className="flex flex-col">
                {postQuery?.post.map((entry) => {
                  return <PostListEntry post={entry} />;
                })}
              </div>
            </div>
          </Container>
        );
      }}
    </ApolloClient.Consumer>
  );
}
