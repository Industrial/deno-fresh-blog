import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps } from "#/lib/classNames.ts";
import { Container } from "#/components/Container.tsx";
import { css, cx } from "#/lib/emotion.ts";
import { spacing } from "#/style/theme.ts";
import { smUp } from "#/style/breakpoints.ts";

export type BlogContainerProps = ChildrenProps & ClassNameProps;

export function BlogContainer({ children, className }: BlogContainerProps) {
  return (
    <Container
      className={cx(
        css({
          ...smUp({
            marginTop: `${spacing(10)}px`,
          }),
        }),
        className,
      )}
    >
      {children}
    </Container>
  );
}
