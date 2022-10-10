import { TypeOf, z } from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  phonenumber: z.string().regex(
    /^\+?[- 0-9]+$/,
    "Invalid phone number",
  ),
  content: z.string().min(3),
});

export type ContactSchemaType = TypeOf<typeof contactSchema>;
