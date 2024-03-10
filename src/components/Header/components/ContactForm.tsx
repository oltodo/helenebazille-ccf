"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/TextInput";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import clsx from "clsx/lite";

import { useFormState, useFormStatus } from "react-dom";
import { FormState, formSchema } from "./config";
import { FormValues } from "./config";
import { sendMessage } from "./actions";

const initialState = {
  message: "",
};

type Props = {
  state: FormState;
};

export function ContactForm({ state }: Props) {
  const {
    formState: { isValid, errors },
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { pending } = useFormStatus();

  const disabled = pending || state.message === "sent";

  return (
    <div className="relative flex flex-col gap-8">
      <div className="flex flex-col gap-8 md:flex-row lg:flex-col xl:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <TextInput
            {...register("name")}
            inputClassName={clsx("bg-sand")}
            label="Votre nom *"
            disabled={disabled}
          />
          <TextInput
            {...register("email")}
            inputClassName={clsx("bg-sand")}
            label="Votre email *"
            inputMode="email"
            type="email"
            disabled={disabled}
          />
          <TextInput
            {...register("phone")}
            inputClassName={clsx("bg-sand")}
            label="Votre téléphone"
            inputMode="tel"
            disabled={disabled}
          />
        </div>
        <TextArea
          {...register("message")}
          inputClassName={clsx("min-h-72 bg-sand")}
          label="Votre message *"
          className="flex flex-1"
          disabled={disabled}
        />
      </div>
      <Button disabled={!isValid || disabled}>Envoyer</Button>

      {state.message === "sent" && (
        <div className="absolute inset-0 flex items-center justify-center bg-sand text-xl font-semibold opacity-80 md:text-2xl">
          Votre message à bien été envoyé.
        </div>
      )}
    </div>
  );
}
