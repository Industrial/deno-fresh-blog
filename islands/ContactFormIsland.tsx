import { DehydratedState } from "react-query";

import { ContactPage } from "#/components/page/ContactPage.tsx";

export type ContactFormIslandProps = {
  dehydratedState: DehydratedState;
};

export default function ContactFormIsland({
  dehydratedState,
}: ContactFormIslandProps): JSX.Element {
  return <ContactPage />;
}
