import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useEffect, ReactNode, useRef } from "react";
import BrandImage from "@/assets/images/brand.svg";
import LogoImage from "@/assets/images/logo.svg";

import { ContactForm } from "./ContactForm";

type Props = {
  children: ReactNode;
  open: boolean;
};

export function Menu({ children, open }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="group/dialog pointer-events-none fixed inset-0 z-[999] block size-full max-h-none max-w-none overflow-y-hidden overscroll-contain bg-transparent p-0 text-xl opacity-0 delay-1000 duration-0 ease-in-out backdrop:bg-transparent open:pointer-events-auto open:opacity-100 open:delay-0"
      ref={dialogRef}
    >
      <div className="size-full translate-y-[-100%] overflow-y-auto overflow-x-hidden bg-sandDark transition-transform delay-100 duration-700 group-open/dialog:translate-y-0 group-open/dialog:delay-0">
        <div className="container mx-auto space-y-20 px-8 py-12 opacity-0 transition-opacity group-open/dialog:opacity-100 group-open/dialog:delay-700 lg:max-w-[1440px]">
          <div className="space-y-8">
            <LogoImage className="size-16" />
            <BrandImage className="h-16 text-terracotta" />
          </div>
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="max-w-[400px] space-y-8">
              <div className="flex gap-4">
                <div className="space-y-4 rounded-bl-3xl rounded-tr-3xl bg-terracottaLight px-3 py-6 text-sand">
                  <div className="flex h-7 flex-col justify-center">
                    <MapPinIcon className="h-6 text-sandDark" />
                  </div>
                  <div className="flex h-7 flex-col justify-center">
                    <AtSymbolIcon className="h-6 text-sandDark" />
                  </div>
                  <div className="flex h-7 flex-col justify-center">
                    <PhoneIcon className="h-6 text-sandDark" />
                  </div>
                </div>
                <div className="space-y-4 py-6">
                  <div>4 Rue Villeneuve, 69440 Mornant</div>
                  <div>
                    <a
                      href="mailto:contact@helenebazille-ccf.fr"
                      className="underline"
                    >
                      contact@helenebazille-ccf.fr
                    </a>
                  </div>
                  <div>
                    <a href="tel:+33783044613" className="underline">
                      07 83 04 46 13
                    </a>
                  </div>
                </div>
              </div>

              <div className="leading-relaxed">
                Je vous accueille le lundi et le vendredi de 8h à 20h dans mon
                cabinet ou en téléconsultation.
              </div>
            </div>
            <div className="flex-1 space-y-20">
              <div className="space-y-8">
                <h2 className="font-title text-3xl md:text-4xl">
                  Contactez-moi
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-0 mx-4 flex h-20 flex-col items-start justify-center md:mx-8 md:h-32">
        <div>{children}</div>
      </div>
    </dialog>
  );
}
