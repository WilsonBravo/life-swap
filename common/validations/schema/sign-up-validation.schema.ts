import { z } from "zod";

const validationSchema = z
  .object({
    username: z
      .string({ message: "Invalid username" })
      .min(2, { message: "More than 2 characters" })
      .max(12, { message: "Less than 12 characters" })
      .regex(/^\S+$/, {
        message: "Single word without spaces",
      })
      .regex(/^[a-zA-Z0-9.]+$/, {
        message: "Can only contain letters, numbers, and dots",
      }),
    email: z
      .string({ message: "Invalid email" })
      .email({ message: "Invalid email" })
      .min(6, { message: "More than 6 characters" })
      .max(50, { message: "Less than 50 characters" }),
    password: z
      .string()
      .min(6, { message: "More than 6 characters" })
      .max(24, { message: "Less than 24 characters" })
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
      .max(24, { message: "Less than 24 characters" })
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
