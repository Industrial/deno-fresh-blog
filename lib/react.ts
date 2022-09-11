import { ReactNode } from "react";

export type Children =
  | ReactNode
  | Array<ReactNode>
  | JSX.Element
  | Array<JSX.Element>;
