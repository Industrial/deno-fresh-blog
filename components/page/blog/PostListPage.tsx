import { Button } from "#/components/Button.tsx";
import { Column, Row } from "#/components/grid/mod.ts";
import { Container } from "#/components/grid/mod.ts";
import { PostListEntry } from "#/components/page/blog/PostListEntry.tsx";
import { PostQuery } from "#/graphql/generated/client.ts";
import { UseQuery } from "#/lib/graphql.ts";
import { css, cx } from "#/lib/emotion.ts";
import { lgUp } from "#/style/breakpoints.ts";
import { spacing } from "#/style/theme.ts";

export type PostListPageProps = {
  query: UseQuery<PostQuery>;
  onLoadMore: () => void;
};

export function PostListPage({ query, onLoadMore }: PostListPageProps) {
  function handleLoadMore() {
    onLoadMore();
  }

  return (
    <Container
      className={cx(
        css({
          ...lgUp({
            marginTop: `${spacing(10)}px`,
          }),
        }),
      )}
    >
      <Row>
        {query.data?.post.map((entry) => {
          return (
            <PostListEntry
              post={entry}
              className={cx(
                css({
                  marginBottom: "2em",
                }),
              )}
            />
          );
        })}
        <Column>
          <Button
            variant="primary"
            className={cx(
              css({
                marginTop: "2em",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2em",
              }),
            )}
            onClick={() => {
              handleLoadMore();
            }}
            disabled={query.isLoading}
          >
            Load More
          </Button>
        </Column>
      </Row>
    </Container>
  );
}
