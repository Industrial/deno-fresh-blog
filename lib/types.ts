import { ComponentChild, VNode } from "preact";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Children =
  | undefined
  | null
  | string
  | number
  | bigint
  | boolean
  | Record<string, unknown>
  | VNode<unknown>
  | ComponentChild[];

export type ChildrenProps = {
  children?: Children;
};
