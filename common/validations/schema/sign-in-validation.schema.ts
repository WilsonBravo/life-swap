import { z } from "zod";

const validationSchema = z.object({
  email: z
    .string({ message: "Email no válido" })
    .min(1, { message: "Email no válido" })
    .email({ message: "Email no válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .max(12, { message: "La contraseña no debe tener más de 12 caracteres" }),
});

export type SignInFormData = z.infer<typeof validationSchema>;
export { validationSchema as signInValidationSchema };
