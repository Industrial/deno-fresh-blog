import { PostQueryVariables } from "#/graphql/generated/client.ts";

export const postQueryVariables: PostQueryVariables = {
  filter: {
    status: {
      _eq: "published",
    },
  },
  sort: ["-date_created"],
  limit: 1,
  offset: 0,
};
