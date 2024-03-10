import { useController, Control } from "react-hook-form";

import { eventTypes } from "../../config";
import { FormValues } from "../../types";
import * as Card from "../Card";

type Props = {
  control: Control<FormValues>;
};

export function SessionTypeStep({ control }: Props) {
  const {
    field: { onChange },
  } = useController({ name: "sessionType", control });

  return (
    <Card.Wrapper>
      {eventTypes.map((type) => (
        <Card.Item
          detail={`${type.duration} min. / ${type.price} €`}
          onClick={() => onChange(type.id)}
          label={type.label}
          key={type.id}
        />
      ))}
    </Card.Wrapper>
  );
}
