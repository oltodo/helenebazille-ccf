import { TextInput } from "@/components/TextInput";
import { TextArea } from "@/components/TextArea";
import { Control } from "react-hook-form";

import { FormValues } from "../../types";

type Props = {
  control: Control<FormValues>;
};

export function ContactStep({ control }: Props) {
  const { register } = control;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <div className="flex flex-1 flex-col gap-4 md:gap-8">
        <TextInput
          inputClassName="bg-sandDark"
          label="Prénom"
          {...register("firstName")}
        />
        <TextInput
          inputClassName="bg-sandDark"
          label="Nom"
          {...register("lastName")}
        />
        <TextInput
          inputClassName="bg-sandDark"
          inputMode="email"
          label="Email"
          {...register("email")}
        />
        <TextInput
          inputClassName="bg-sandDark"
          label="Téléphone"
          inputMode="tel"
          {...register("phone")}
        />
      </div>
      <div className="flex-1 ">
        <TextArea
          label="Informations complémentaires"
          inputClassName="bg-sandDark"
          className="h-full"
          {...register("notes")}
        />
      </div>
    </div>
  );
}
