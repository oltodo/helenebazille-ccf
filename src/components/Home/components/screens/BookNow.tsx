import { eventTypes } from "@/components/BookDialog/config";
import { SessionType } from "@/components/BookDialog/types";
import { Button } from "@/components/Button";
import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx/lite";

type Props = {
  onSelectSessionType: (type: SessionType) => void;
  inView: boolean;
};

export const BookNow = forwardRef<HTMLDivElement, Props>(function BookNow(
  { onSelectSessionType },
  ref,
) {
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-[-25vh] p-6 text-sandLight" ref={ref}>
      <div className="h-[150vh]" ref={headingRef}>
        <motion.div
          className="sticky top-0 flex h-screen w-full flex-col justify-center text-center font-title text-5xl leading-none text-sandDark md:text-[12vh]"
          transition={{
            staggerChildren: 0.2,
          }}
          viewport={{ once: true, amount: 1 }}
          whileInView="shown"
          initial="hidden"
        >
          {["Pour une", "première", "rencontre"].map((part) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                shown: { opacity: 1, y: 0 },
              }}
              transition={{ ease: "easeInOut", duration: 1 }}
              key={part}
            >
              {part}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-[-25vh] flex max-w-[830px] flex-col gap-4 text-balance text-center text-xl md:text-2xl">
        <div className="mb-4 font-semibold">
          Je vous reçois le lundi et le vendredi de 8h à 20h, dans mon cabinet
          situé dans le centre de Mornant ou bien en téléconsultation.
        </div>
        <div>
          La prise de rendez-vous peut se faire en ligne via ce site, ou en
          m’appelant directement. Certains souhaitent avoir un premier contact
          par téléphone, d’autres préfèrent se faire une idée du thérapeute lors
          d’un premier rendez-vous.
        </div>
        <div>
          La première séance est une rencontre. À l’issue de celle-ci, vous
          pourrez choisir à bon escient de commencer ou non un suivi avec moi ;
          il est en effet important que vous soyez à l’aise avec le
          professionnel qui vous accompagne.
        </div>
        <div>
          De mon côté, si le sujet pour lequel vous me consultez n’est pas dans
          mon domaine d’expertise, je vous en informerai, et je pourrai vous
          orienter, si vous le souhaitez, vers un professionnel approprié.
        </div>
      </div>

      <motion.div
        className="my-[10vmax] flex flex-col justify-center gap-8 lg:flex-row"
        transition={{
          staggerChildren: 0.2,
        }}
        viewport={{ amount: 0.5, once: true }}
        whileInView="shown"
        initial="hidden"
      >
        {eventTypes.map((type) => (
          <motion.div
            transition={{
              delayChildren: 0.5,
              ease: "easeInOut",
              type: "tween",
              duration: 1,
            }}
            className="rounded-lg bg-sandDark text-gunmetal transition-shadow hover:shadow-xl md:min-h-[400px] md:max-w-[400px]"
            variants={{
              hidden: { opacity: 0, y: 100 },
              shown: { opacity: 1, y: 0 },
            }}
            key={type.id}
          >
            <motion.div
              transition={{
                ease: "easeInOut",
                type: "tween",
                duration: 1,
              }}
              variants={{
                hidden: { opacity: 0 },
                shown: { opacity: 1 },
              }}
              className="flex h-full flex-col items-center p-6 md:flex-col md:p-12"
            >
              <div className="mb-8 flex-1 text-center md:mb-12">
                <h2 className="mb-2 text-2xl font-semibold md:mb-4 md:text-3xl">
                  {type.label}
                </h2>
                <p className="text-2xl opacity-70">
                  {type.duration} min. / {type.price} €
                </p>
              </div>
              <div>
                <Button onClick={() => onSelectSessionType(type.id)}>
                  Prendre Rendez&#8209;vous
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});
