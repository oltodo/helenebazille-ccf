import { useTransform, useScroll, useSpring, motion } from "framer-motion";
import { useImperativeHandle, forwardRef, useRef } from "react";
import Image from "next/image";

import heleneImage from "../../images/helene.png";
import { Button } from "@/components/Button";

type Props = {
  onClickContactMe: () => void;
};

export const AboutMe = forwardRef<HTMLDivElement, Props>(function AboutMe(
  { onClickContactMe },
  ref,
) {
  const innerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => innerRef.current!, []);

  const { scrollYProgress: scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: innerRef,
  });

  const scrollYProgressSprung = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 15,
    mass: 0.27,
  });

  const right = useTransform(scrollYProgressSprung, [0, 1], ["0%", "70%"]);
  const left = useTransform(right, (value) => `-${value}`);

  return (
    <div className="bg-terracotta" ref={innerRef}>
      <div className="pointer-events-none sticky top-0 z-10 h-[100vh] w-full overflow-hidden">
        <svg
          className="absolute left-0 top-0 z-10 h-[50vh] portrait:h-[30vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 795 428"
        >
          <motion.path
            d="M76.768 410.11C54.214 408.047 17.348 411.025 0 428V0h795c0 4.014-44.004 143.813-140.524 143.813-54.767 0-94.896-42.618-218.106 0C313.44 186.335 344.097 434.53 76.768 410.11Z"
            transition={{ type: "spring", duration: 3 }}
            style={{ x: left }}
            fillRule="nonzero"
            fill="#EB7751"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0 h-[70vh] portrait:h-[40vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 788 577"
        >
          <motion.path
            d="M 788 577 V 0 C 770 12 749 25 724 37 C 688 54 632 75 592 119 S 573 271 492 335 C 412 398 307 363 237 398 S 176 473 114 517 C 72 547 34 566 0 577 H 788 Z"
            transition={{ type: "spring", duration: 3 }}
            style={{ x: right }}
            fill="#EB7751"
          />
        </svg>
      </div>

      <div className="mt-[-40vh] flex flex-col justify-center gap-12 px-6 pb-[40vh] lg:flex-row-reverse">
        <div>
          <Image
            alt="Portrait photo de Hélène"
            src={heleneImage}
            className="sticky top-[calc((100svh-30vw)/2)] h-[50vh] max-h-[800px] w-auto"
          />
        </div>
        <div className="flex max-w-[500px] flex-col gap-8 text-balance text-xl text-sand md:gap-12 md:text-2xl">
          <p>
            Étudiante, je me lance dans cinq ans d’études passionnantes en
            sciences humaines. Une fois le Master II « Sciences de la
            Communication et Médiation des Savoirs » en poche, je travaille
            plusieurs années dans un poste de consultante en communication dans
            le secteur des Ressources Humaines. Devenue maman, les rencontres et
            le cheminement de vie aidant, je décide de me réorienter
            professionnellement vers un métier plus proche de mes centres
            d’intérêt et de ma personnalité.
          </p>
          <p>
            Au gré d’un suivi avec une CCF, je découvre ce beau métier et renoue
            avec mes premières amours : la psychologie, l’écoute, l’analyse, les
            relations humaines dans leurs interactions, l’Humain dans toute sa
            richesse et sa complexité.
          </p>
          <p>
            J’entame alors une formation à l’issue de laquelle je deviens
            conseillère conjugale et familiale.
          </p>
          <p>
            La formation qualifiante au conseil conjugal et familial est validée
            par le Ministère des Solidarités et de la Santé et est inscrite dans
            le Code de la santé publique.
          </p>
          <p>
            Je suis membre de l’ANCCEF (Association Nationale des Conseillers
            Conjugaux Et Familiaux).
          </p>
          <div>
            <Button color="sand" onClick={onClickContactMe}>
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
