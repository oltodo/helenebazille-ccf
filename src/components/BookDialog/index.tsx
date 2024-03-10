import {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
  useRef,
} from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import clsx from "clsx/lite";

import { SessionTypeStep } from "./components/steps/SessionTypeStep";
import { SessionType, FormValues, formValues, Step } from "./types";
import { LocationStep } from "./components/steps/LocationStep";
import { ContactStep } from "./components/steps/ContactStep";
import { ThanksStep } from "./components/steps/ThanksStep";
import { SlotStep } from "./components/steps/SlotStep";
import { Button } from "../Button";

const steps: Step[] = ["type", "location", "contact", "slot", "thanks"];

type Props = {
  forceSessionType?: SessionType;
};

export const BookDialog = forwardRef<HTMLDialogElement, Props>(
  function BookDialog({ forceSessionType }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [step, setStep] = useState<Step>(
      forceSessionType ? "location" : "type",
    );
    const [direction, setDirection] = useState<"backward" | "forward">(
      "forward",
    );

    useImperativeHandle(ref, () => dialogRef.current!, []);

    const form = useForm<FormValues>({
      defaultValues: {
        sessionType: forceSessionType,
      },
      resolver: zodResolver(formValues),
    });

    const {
      formState: { isValid },
      handleSubmit,
      setValue,
      control,
    } = form;

    useEffect(() => {
      if (forceSessionType && step === "type") {
        setStep("location");
        setValue("sessionType", forceSessionType);
      }
    }, [forceSessionType, setValue, step]);

    const nextStep = () => {
      setDirection("forward");
      const index = steps.indexOf(step);

      if (index < steps.length) {
        setStep(steps[index + 1]);
      }
    };

    const previousStep = () => {
      setDirection("backward");
      const index = steps.indexOf(step);

      if (index > 0) {
        setStep(steps[index - 1]);
      }
    };

    const close = () => {
      dialogRef.current?.close();
      setStep("type");
    };

    return (
      <dialog
        className={clsx(
          "group/dialog z-[999] place-items-end bg-transparent backdrop:bg-gunmetal/50 backdrop:backdrop-blur",
          "pointer-events-none fixed inset-0 m-0 grid size-full max-h-none max-w-none justify-items-center overflow-y-hidden overscroll-contain",
          "open:pointer-events-auto open:opacity-100",
        )}
        ref={dialogRef}
      >
        <form
          className={clsx(
            "col-start-1 row-start-1 size-full h-[95vh] max-h-[800px] translate-y-[200px] rounded-t-2xl bg-sand opacity-0 shadow-xl transition-[transform,opacity] delay-100 duration-300",
            "group-open/dialog:translate-y-0 group-open/dialog:opacity-100 group-open/dialog:delay-0",
          )}
          onSubmit={handleSubmit(nextStep, () => {
            if (step !== "contact") {
              nextStep();
            }
          })}
        >
          <div className="mx-auto flex min-h-full max-w-[1024px] flex-col opacity-0 transition-opacity delay-0 group-open/dialog:opacity-100 group-open/dialog:delay-500">
            <h2 className="sticky top-0 z-10 w-full border-b bg-sand p-4 pt-6 text-center font-title text-xl text-terracotta sm:text-3xl">
              <span className="mx-auto">Prendre rendez-vous</span>

              <div className="absolute inset-y-0 right-4 flex justify-center">
                <button
                  onClick={() => {
                    close();
                  }}
                  aria-label="Fermer la fenêtre"
                  type="button"
                >
                  <XMarkIcon className="ml-auto size-8" />
                </button>
              </div>
            </h2>

            <div className="relative flex-1 overflow-x-hidden">
              <AnimatePresence>
                {step === "type" ? (
                  <motion.div
                    initial={{
                      x: direction === "backward" ? "-100%" : "100%",
                    }}
                    animate={{ transition: { ease: "easeInOut" }, x: 0 }}
                    className="absolute inset-0 overflow-y-auto p-6"
                    exit={{ opacity: 0, scale: 0.9 }}
                    key="type"
                  >
                    <SessionTypeStep control={control} />
                  </motion.div>
                ) : step === "location" ? (
                  <motion.div
                    initial={{
                      x: direction === "backward" ? "-100%" : "100%",
                    }}
                    animate={{ transition: { ease: "easeInOut" }, x: 0 }}
                    className="absolute inset-0 overflow-y-auto p-6"
                    exit={{ opacity: 0, scale: 0.9 }}
                    key="location"
                  >
                    <LocationStep control={control} />
                  </motion.div>
                ) : step === "contact" ? (
                  <motion.div
                    initial={{
                      x: direction === "backward" ? "-100%" : "100%",
                    }}
                    animate={{ transition: { ease: "easeInOut" }, x: 0 }}
                    className="absolute inset-0 overflow-y-auto p-6"
                    exit={{ opacity: 0, scale: 0.9 }}
                    key="contact"
                  >
                    <ContactStep control={control} />
                  </motion.div>
                ) : step === "slot" ? (
                  <motion.div
                    initial={{
                      x: direction === "backward" ? "-100%" : "100%",
                    }}
                    animate={{ transition: { ease: "easeInOut" }, x: 0 }}
                    className="absolute inset-0 overflow-y-auto p-6"
                    exit={{ opacity: 0, scale: 0.9 }}
                    key="slot"
                  >
                    <SlotStep
                      onBookingSuccessful={() => {
                        setStep("thanks");
                      }}
                      form={form}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{
                      x: direction === "backward" ? "-100%" : "100%",
                    }}
                    animate={{ transition: { ease: "easeInOut" }, x: 0 }}
                    className="absolute inset-0 overflow-y-auto p-6"
                    exit={{ opacity: 0, scale: 0.9 }}
                    key="thanks"
                  >
                    <ThanksStep onClickClose={() => close()} form={form} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step !== "type" && step !== "thanks" && (
              <div className="sticky bottom-0 flex min-h-20 items-center justify-between border-t bg-sand px-6">
                <button
                  onClick={() => {
                    previousStep();
                  }}
                  className="text-xl"
                  type="button"
                >
                  &lsaquo; Retour
                </button>

                <Button
                  className={clsx(step !== "contact" && "invisible")}
                  disabled={!isValid}
                  size="small"
                >
                  Valider
                </Button>
              </div>
            )}
          </div>
        </form>
      </dialog>
    );
  },
);
