import { JSXInternal } from "https://esm.sh/v94/preact@10.10.6/src/jsx.d.ts";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Children =
  | string
  | JSXInternal.Element
  | Array<JSXInternal.Element>;

export type ChildrenProps = {
  children?: Children;
};
