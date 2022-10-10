import { useForm } from "react-hook-form";
import { useMemo } from "preact/hooks";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "#/components/Button.tsx";
import { Column } from "#/components/grid/Column.tsx";
import { contactSchema, ContactSchemaType } from "#/domain/ContactSchema.ts";
import { Container } from "#/components/grid/Container.tsx";
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from "#/graphql/generated/client.ts";
import { EmailInput } from "#/components/form/EmailInput.tsx";
import { Row } from "#/components/grid/Row.tsx";
import { TextInput } from "#/components/form/TextInput.tsx";
import { TextareaInput } from "#/components/form/TextareaInput.tsx";
import { createGraphQLClient, useMutation } from "#/lib/graphql.ts";
import { css, cx } from "#/lib/emotion.ts";
import { lgUp } from "#/style/breakpoints.ts";
import { spacing } from "#/style/theme.ts";

export function ContactPage() {
  const { handleSubmit, register, formState } = useForm<ContactSchemaType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  const client = useMemo(() => {
    return createGraphQLClient();
  }, []);

  const contactMutation = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >({
    client,
  });

  const handleFormSubmit = async (data: ContactSchemaType) => {
    await contactMutation.mutate(data);
  };

  return (
    <form
      autoComplete="off"
      // @ts-ignore: Preact Type doesn't match React Type
      onSubmit={handleSubmit(handleFormSubmit)}
      disabled={contactMutation.isLoading}
      className={cx(
        css({
          width: "100%",
        }),
      )}
    >
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
          <Column>
            <h1>Contact</h1>
          </Column>
        </Row>
        <Row>
          <Column xs={12} md={6}>
            <EmailInput
              label="Email"
              {...register("email")}
              error={formState.errors.email?.message}
              required
            />
          </Column>
          <Column xs={12} md={6}>
            <TextInput
              label="Phone Number"
              {...register("phonenumber")}
              error={formState.errors.phonenumber?.message}
              required
            />
          </Column>
          <Column xs={12} md={6}>
            <TextareaInput
              label="Message"
              {...register("content")}
              error={formState.errors.content?.message}
              required
            />
            <Button type="submit">Submit</Button>
          </Column>
        </Row>
      </Container>
    </form>
  );
}
