import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/Button";

import { FormValues } from "../../types";

type Props = {
  form: UseFormReturn<FormValues>;
  onClickClose: () => void;
};

export function ThanksStep({ onClickClose, form }: Props) {
  const { getValues } = form;

  const { location } = getValues();

  return (
    <div className="flex h-full items-center justify-center text-balance">
      <div className="max-w-[540px] space-y-8 text-center text-xl md:gap-8">
        <div className="text-2xl font-bold leading-snug md:text-4xl">
          Votre rendez-vous
          <br />
          est confirmé.
        </div>
        <div className="space-y-4">
          <div>
            Vous recevrez un email à l’adresse que vous avez indiqué qui
            récapitule toutes les informations de l‘évènement.
          </div>
          <div>
            Vous y trouverez également deux liens vous permettant de replanifier
            ou annuler le rendez-vous
          </div>

          {location === "remote" && (
            <div>
              Vous avez choisi une séance en téléconsultation qui se fera par le
              biais de Google Meet. Conservez bien l‘email que vous avez reçu
              car il contient le lien qui vous permettra de vous connecter.
            </div>
          )}

          <div>
            En cas de difficulté, n’hésitez pas à me contacter directement par
            téléphone au{" "}
            <a
              className="relative box-border inline-flex h-6 max-w-fit items-center justify-between whitespace-nowrap rounded-sm bg-sandDark px-1"
              href="tel:+33783044613"
            >
              07 83 04 46 13
            </a>
          </div>
        </div>
        <div className="font-bold">
          <Button onClick={onClickClose}>Fermer</Button>
        </div>
      </div>
    </div>
  );
}
