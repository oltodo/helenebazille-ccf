import Cal, { getCalApi } from "@calcom/embed-react";
import { UseFormReturn } from "react-hook-form";
import { useEffect } from "react";

import { SessionType, FormValues } from "../../types";

const link: Record<SessionType, string> = {
  solo: "helenebazille-ccf/individuel",
  tribe: "helenebazille-ccf/famille",
  duo: "helenebazille-ccf/couple",
};

function toInternationalPhone(number: string) {
  return `+33${number.slice(1)}`;
}

type Props = {
  form: UseFormReturn<FormValues>;
  onBookingSuccessful: () => void;
};

export function SlotStep({ onBookingSuccessful, form }: Props) {
  const { getValues } = form;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        theme: "dark",
      });

      cal("on", {
        callback: onBookingSuccessful,
        action: "bookingSuccessful",
      });
    })();
  }, [onBookingSuccessful]);

  const values = getValues();

  return (
    <Cal
      config={{
        location: JSON.stringify({
          value:
            values.location === "office"
              ? "inPerson"
              : "integrations:google:meet",
          optionValue: "",
        }),
        phone: toInternationalPhone(values.phone),
        firstName: values.firstName,
        lastName: values.lastName,
        notes: values.notes || "",
        email: values.email,
      }}
      style={{ overflow: "scroll", height: "100%", width: "100%" }}
      calLink={link[values.sessionType]}
      key={+new Date()}
    />
  );
}
