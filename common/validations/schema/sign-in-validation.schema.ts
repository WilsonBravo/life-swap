import { z } from "zod";

const validationSchema = z.object({
  email: z
    .string({ message: "Invalid email" })
    .email({ message: "Invalid email" })
    .min(6, { message: "More than 6 characters" })
    .max(50, { message: "Less than 50 characters" }),
  password: z
    .string()
    .min(6, { message: "More than 6 characters" })
    .max(24, { message: "Less than 24 characters" }),
});

export type SignInFormData = z.infer<typeof validationSchema>;
export { validationSchema as signInValidationSchema };
