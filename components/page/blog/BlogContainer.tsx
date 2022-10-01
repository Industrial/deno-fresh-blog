import { ChildrenProps } from "#/lib/types.ts";
import { ClassNameProps, withClassNames } from "#/lib/classNames.ts";
import { Container } from "#/components/Container.tsx";

export type BlogContainerProps = ChildrenProps & ClassNameProps;

export function BlogContainer({ children, className }: BlogContainerProps) {
  return (
    <Container {...withClassNames("pl-1 sm:pl-0", "pr-1 sm:pr-0", className)}>
      {children}
    </Container>
  );
}
