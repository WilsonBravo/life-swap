import { z } from "zod";

const validationSchema = z
  .object({
    name: z
      .string({ message: "Invalid name" })
      .min(2, { message: "More than 2 characters" })
      .max(40, { message: "Less than 40 characters" })
      .regex(/^\S+$/, {
        message: "Single word without spaces",
      }),
    email: z
      .string({ message: "Invalid email" })
      .min(1, { message: "Invalid email" })
      .email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "More than 6 characters" })
      .max(20, { message: "Less than 20 characters" })
      .regex(/[A-Z]/, {
        message: "At least one capital letter",
      })
      .regex(/[a-z]/, {
        message: "At least one lowercase letter",
      })
      .regex(/\d/, { message: "At least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "At least one special character",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "More than 6 characters" })
      .max(20, { message: "Less than 20 characters" })
      .regex(/[A-Z]/, {
        message: "At least one capital letter",
      })
      .regex(/[a-z]/, {
        message: "At least one lowercase letter",
      })
      .regex(/\d/, { message: "At least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "At least one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof validationSchema>;
export { validationSchema as signUpValidationSchema };
