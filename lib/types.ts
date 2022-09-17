import { ReactNode } from "react";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Children =
  | string
  | ReactNode
  | Array<ReactNode>
  | JSX.Element
  | Array<JSX.Element>;

export type ChildrenProps = {
  children?: Children;
};
