import { z } from "zod";

export const formSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{10}$/, "Le numéro doit être composé de 10 chiffres")
    .optional()
    .or(z.literal("")),
  email: z.string().email("L’adresse email n’est pas valide").min(1),
  message: z.string().min(1),
  name: z.string().min(1),
});

export type FormValues = z.infer<typeof formSchema>;

export type FormState = {
  status: "sent" | "error" | null;
};

export const initialFormState: FormState = {
  status: null,
};
