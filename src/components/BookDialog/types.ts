import { z } from "zod";

export const sessionType = z.enum(["solo", "duo", "tribe"]);
export const location = z.enum(["office", "remote"]);

export const formValues = z.object({
  phone: z
    .string()
    .length(10, "Le numéro doit contenir 10 chiffres")
    .regex(/^\d+$/, "Le numéro doit contenir uniquement des chiffres"),
  email: z.string().email("L’adresse email n’est pas valide").min(1),
  firstName: z.string().min(1),
  notes: z.string().optional(),
  lastName: z.string().min(1),
  sessionType: sessionType,
  location: location,
});

export type Step = "location" | "contact" | "thanks" | "slot" | "type";

export type FormValues = z.infer<typeof formValues>;

export type SessionType = z.infer<typeof sessionType>;
