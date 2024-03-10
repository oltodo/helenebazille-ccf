import { forwardRef, ReactNode } from "react";
import { Button } from "@/components/Button";

import { ExpertiseInfo } from "../config";

type RootProps = {
  data: ExpertiseInfo;
  onClick: () => void;
};

export const Root = forwardRef<HTMLDivElement, RootProps>(
  function ExpertiseCard({ onClick, data }, ref) {
    return (
      <div
        className="h-[70vh] max-h-[640px] w-[80vw] max-w-[480px] rounded-2xl bg-sandLight p-6 md:p-12"
        ref={ref}
      >
        <div
          className={
            "relative flex max-h-full flex-col gap-4 overflow-hidden md:gap-10"
          }
        >
          <h2 className="text-3xl !leading-snug text-terracotta md:text-4xl">
            {data.label}
          </h2>
          <div className="flex-1 overflow-hidden bg-gradient-to-b from-gunmetal to-gunmetal/0 bg-clip-text text-xl text-transparent md:text-2xl">
            {data.content}
          </div>
          <div>
            <Button className="mx-auto" onClick={onClick}>
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

type HelpingProps = {
  children: ReactNode;
};

export function Helping({ children }: HelpingProps) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="mt-8 text-4xl text-terracotta md:mt-12">
        En quoi puis-je vous aider{" "}?
      </h2>
      {children}
    </div>
  );
}
