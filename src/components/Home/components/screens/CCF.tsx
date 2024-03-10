import { useTransform, useScroll, motion } from "framer-motion";
import therapyImage from "@/assets/images/therapy.png";
import { forwardRef, useRef } from "react";
import Image from "next/image";

const MotionImage = motion(Image);

export const CCF = forwardRef<HTMLDivElement>(function CCF(_, ref) {
  const pictureRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgressPicture } = useScroll({
    offset: ["start end", "end start"],
    target: pictureRef,
  });

  const y = useTransform(scrollYProgressPicture, [0, 1], ["-100%", "100%"]);

  const { scrollYProgress: scrollYProgressText } = useScroll({
    offset: ["start end", "end start"],
    target: textRef,
  });

  const scale = useTransform(scrollYProgressText, [0, 1], [1.2, 1]);

  return (
    <div className="relative flex bg-sandDark portrait:flex-col" ref={ref}>
      <div
        className="sticky top-0 h-[100vh] overflow-hidden landscape:flex-1"
        ref={pictureRef}
      >
        <MotionImage
          className="object-cover portrait:h-[80vw]"
          alt="Deux personnes semblent discuter"
          // @ts-expect-error
          style={{ scale, y }}
          src={therapyImage}
          fill
        />
      </div>
      <div
        className="z-10 flex flex-1 flex-col items-end gap-10 bg-sandDark p-8 text-right md:p-[10vh]"
        ref={textRef}
      >
        <div className="font-title text-[12vw] leading-none landscape:text-[6vw]">
          <div>Conseil</div>
          <div>Conjugal</div>
          <div>& Familial</div>
        </div>
        <div className="max-w-[600px] space-y-8 text-balance text-2xl">
          <p>
            Dans un cadre sécurisant et bienveillant, je vous accueille le temps
            d’une ou plusieurs séances, pour écouter et discuter ce qui vous
            préoccupe, interroge, contrarie, fait souffrir...
          </p>
          <p>
            Accompagner les cheminements, libérer la parole et soutenir la
            réflexion, mettre des mots sur les maux, aider à comprendre, renouer
            le dialogue, éclairer les décisions, le conseil conjugal et familial
            œuvre pour tout cela à la fois ; il est le couteau-suisse de la
            relation d’aide. Cette profession porte en fait plutôt mal son nom
            car le conseil conjugal et familial ce n’est pas vraiment conseiller
            (vous seuls détenez la faculté de surmonter vos difficultés), mais
            vous accompagner et vous soutenir dans vos cheminements.
          </p>
          <p>
            <span className="font-title text-terracottaLight">
              “Chaque individu a en lui des capacités considérables de se
              comprendre, de changer l’idée qu’il a de lui-même, ses attitudes
              et la manière de se conduire ; il peut puiser dans ses ressources
              pourvu que lui soit assuré un climat fait d’attitudes
              psychologiques “facilitatrices“ que l’on peut déterminer.”
            </span>
             <span>—Carl{" "}Rogers</span>
          </p>
          <p>
            Comme tous les conseillers conjugaux et familiaux, je suis tenue au
            secret professionnel et je suis à même de vous orienter vers
            d’autres professionnels si votre problématique ne relève pas de mon
            champ d’intervention.
          </p>
        </div>
      </div>
    </div>
  );
});
