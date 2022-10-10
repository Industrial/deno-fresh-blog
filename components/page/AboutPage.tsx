import { JSX } from "https://esm.sh/v96/preact@10.11.1/jsx-runtime/src/index.d.ts";

export type AboutPageProps = {
  title: string;
};

export function AboutPage(props: AboutPageProps): JSX.Element {
  return (
    <>
      <h1>About</h1>
      <p>LOL</p>
    </>
  );
}
