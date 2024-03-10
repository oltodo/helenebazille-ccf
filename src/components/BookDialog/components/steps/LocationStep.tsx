import { useController, Control } from "react-hook-form";

import { locations } from "../../config";
import { FormValues } from "../../types";
import * as Card from "../Card";

type Props = {
  control: Control<FormValues>;
};

export function LocationStep({ control }: Props) {
  const {
    field: { onChange },
  } = useController({ name: "location", control });

  return (
    <Card.Wrapper>
      {locations.map((location) => (
        <Card.Item
          onClick={() => onChange(location.id)}
          detail={location.detail}
          label={location.label}
          key={location.id}
        />
      ))}
    </Card.Wrapper>
  );
}
