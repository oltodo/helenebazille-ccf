import { useTransform, useScroll, motion } from "framer-motion";
import { forwardRef, useRef } from "react";
import Image from "next/image";

import sessionImage from "../../images/session.png";

const MotionImage = motion(Image);

export const SessionPicture = forwardRef<HTMLDivElement>(
  function SessionPicture() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      offset: ["start end", "end end"],
      target: ref,
    });

    const clipPathWrapper = useTransform(scrollYProgress, (value) => {
      return value <= 0.75 ? "circle(0%)" : `circle(100%)`;
    });

    const clipPathPicture = useTransform<number, string>(
      scrollYProgress,
      (value) => {
        return value < 0.9 ? `inset(0)` : `inset(15vmin 10vmin)`;
      },
    );

    return (
      <div className="mt-[-150vh] h-[150vh] w-[100vw]" ref={ref}>
        <motion.div
          className="sticky top-0 h-[100vh] w-[100vw] overflow-hidden transition-all duration-700"
          style={{ clipPath: clipPathWrapper }}
        >
          <MotionImage
            className="h-[100vh] w-[100vw] object-cover transition-all duration-700"
            alt="Hélène prend des notes lors d'une séance avec un couple"
            // @ts-expect-error
            style={{ clipPath: clipPathPicture }}
            src={sessionImage}
            fill
          />
        </motion.div>
      </div>
    );
  },
);
