import { useTransform, useScroll, useSpring, motion } from "framer-motion";
import { forwardRef, useEffect, useState, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import { Button } from "@/components/Button";
import clsx from "clsx/lite";

import { ExpertiseInfo, expertises } from "../../config";
import * as ExpertiseCard from "../ExpertiseCard";

const ExpertiseCardMotion = motion(ExpertiseCard.Root);

export const Expertise = forwardRef<HTMLDivElement>(function Expertise(_) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { width: scrollHeight = 0 } = useResizeObserver({ ref: scrollRef });
  const [currentExpertise, setCurrentExpertise] =
    useState<ExpertiseInfo | null>(null);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (currentExpertise) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [currentExpertise]);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: ref,
  });

  const scrollYProgressSprung = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 15,
    mass: 0.27,
  });

  const x = useTransform(scrollYProgressSprung, [0, 0.8], ["0", "-100%"]);

  return (
    <>
      <div
        style={{
          height: scrollHeight,
        }}
        className="relative w-[100vw]"
        ref={ref}
      >
        <div className="h-0">
          <motion.h2
            initial="hidden"
            whileInView="shown"
            viewport={{ amount: 0.5, once: true }}
            transition={{
              staggerChildren: 0.1,
            }}
            className="flex h-[100vh] flex-col justify-center px-6 font-title text-[15vh] leading-none text-terracotta md:px-20 portrait:text-[15vw]"
          >
            {["En quoi", "puis-je", "vous", "aider ?"].map((line, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  shown: { opacity: 1 - index * 0.1, scale: 1 },
                }}
                transition={{ type: "spring" }}
                key={line}
              >
                {line}
              </motion.div>
            ))}
          </motion.h2>
        </div>

        <div className="sticky top-0 h-[100vh] overflow-hidden">
          <motion.div
            className="flex h-[100vh] min-w-min items-center gap-8 pl-[80vw] md:gap-[3vw]"
            ref={scrollRef}
            style={{ x }}
          >
            {expertises.map((expertise) => (
              <ExpertiseCardMotion
                onClick={() => {
                  setCurrentExpertise(expertise);
                }}
                key={expertise.id}
                data={expertise}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <dialog
        className={clsx(
          "group/dialog overflow-y-auto overscroll-contain bg-transparent backdrop:bg-gunmetal/50 backdrop:backdrop-blur",
          "pointer-events-none fixed inset-0 m-0 size-full max-h-none max-w-none",
          "open:pointer-events-auto",
        )}
        ref={dialogRef}
      >
        <div
          className={clsx(
            "col-start-1 row-start-1 translate-y-[200px] rounded-t-2xl bg-sandDark opacity-0 shadow-xl transition-[transform,opacity] duration-300",
            "group-open/dialog:translate-y-0 group-open/dialog:opacity-100",
          )}
        >
          {currentExpertise && (
            <div className="mx-auto flex max-w-[800px] flex-col gap-8 px-6 py-12 text-xl md:py-20 md:text-2xl">
              <h1 className="mb-6 text-5xl md:mb-12">
                {currentExpertise.label}
              </h1>
              {currentExpertise.content}

              <Button
                onClick={() => {
                  setCurrentExpertise(null);
                }}
                className="mt-8"
              >
                Fermer
              </Button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
});
