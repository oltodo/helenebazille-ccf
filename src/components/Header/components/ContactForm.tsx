import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/TextInput";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import clsx from "clsx/lite";
import { z } from "zod";

import { sendMessage } from "./actions";

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

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    formState: { isValid, errors },
    // handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  console.log(errors);

  return (
    <form
      // onSubmit={handleSubmit(() => {
      //   console.log("ok");
      // })}
      className="flex flex-col gap-8"
      action={sendMessage}
    >
      <div className="flex flex-col gap-8 md:flex-row lg:flex-col xl:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <TextInput
            {...register("name")}
            inputClassName={clsx("bg-sand")}
            label="Votre nom *"
          />
          <TextInput
            {...register("email")}
            inputClassName={clsx("bg-sand")}
            label="Votre email *"
            inputMode="email"
            type="email"
          />
          <TextInput
            {...register("phone")}
            inputClassName={clsx("bg-sand")}
            label="Votre téléphone"
            inputMode="tel"
          />
        </div>
        <TextArea
          {...register("message")}
          inputClassName={clsx("min-h-72 bg-sand")}
          label="Votre message *"
          className="flex flex-1"
        />
      </div>
      <Button disabled={!isValid}>Envoyer</Button>
    </form>
  );
}
