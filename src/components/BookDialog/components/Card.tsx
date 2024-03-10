import { ReactNode } from "react";

import { Button } from "../../Button";

export type ItemProps = {
  onClick: () => void;
  detail: ReactNode;
  label: ReactNode;
};

export function Item({ onClick, detail, label }: ItemProps) {
  return (
    <div className="flex max-h-[380px] flex-1 flex-col items-center gap-6 rounded-lg bg-sandDark p-6 text-center sm:flex-row sm:text-left md:p-8 lg:flex-col lg:text-center">
      <div className="flex-1 space-y-2">
        <div className="text-xl font-bold md:text-2xl">{label}</div>
        <div className="max-w-80 text-lg md:text-xl">{detail}</div>
      </div>

      <Button onClick={onClick}>Choisir</Button>
    </div>
  );
}

export type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="my-auto flex min-h-full flex-1 flex-col gap-4 md:gap-8 lg:flex-row">
      {children}
    </div>
  );
}
