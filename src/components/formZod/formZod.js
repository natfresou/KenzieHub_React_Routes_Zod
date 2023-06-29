import { z } from "zod";

export const formRegraZod = z
  .object({
    name: z
      .string()
      .min(2, "O campo é obrigatório e precisa conter ao menos 2 caracteres."),
    email: z
      .string()
      .min(1, "O campo é obrigatório")
      .email("Forneça um email válido."),
    bio: z.string().min(1, "O campo é obrigatório"),
    contact: z.string().min(1, "O campo é obrigatório"),
    course_module: z.string().min(1, "O campo é obrigatório"),
    password: z
      .string()
      .min(8, " O campo é obrigatório e precisa ter ao menos 8 caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*?[!#@$%&])/,
        "É necessário ter ao menos um caractere especial"
      ),
    currentPassword: z.string().min(1, "O campo é obrigatório"),
  })
  .refine(({ password, currentPassword }) => currentPassword === password, {
    message: "A confirmação e a senha precisão corresponder",
    path: ["currentPassword"],
  });

export const formRegraZodLogin = z.object({
  email: z
    .string()
    .min(1, "O campo é obrigatório")
    .email("Forneça um email válido."),
  password: z.string().min(6, " O campo é obrigatório."),
});

export const formRegraZodTechChange = z.object({
  status: z.string().min(1, "O campo é obrigatório"),
  title: z.string().min(1, "O campo é obrigatório"),
});
