"use client";

import { Button, Chip } from "@nextui-org/react";
import {
  Variants,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import brandImage from "@/assets/brand.svg";
import logoImage from "@/assets/logo.svg";

const hmin = 0.15; // %
const hmax = 0.3; // %
const roundness = 0.2; // %
const scrollDistance = 200; // px

function getPath(coef: number) {
  const H = 960 * coef;
  const r = H * roundness;
  const h = H - r;

  return `M 0 0 H 960 V ${h} Q 480 ${H + r} 0 ${h} Z`;
}

const itemVariants: Variants = {
  hide: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2,
    },
  },
};

export default function MaintenancePage() {
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, { duration: 0.1 });

  const d = useTransform(
    y,
    [0, scrollDistance],
    [getPath(hmax), getPath(hmin)],
  );

  const titleY = useTransform(
    y,
    [0, scrollDistance],
    [`${hmax * 50}vh`, `${hmin * 50}vh`],
  );

  return (
    <motion.div
      initial="hide"
      animate="show"
      transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
      className="flex min-h-screen w-screen flex-col"
      style={{ paddingTop: `${hmax * 100}vh` }}
    >
      <div className="flex-center pointer-events-none fixed inset-0 z-10 h-screen w-screen fill-background">
        <svg
          className="h-full w-full min-w-[960px] fill-background"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 960 960"
        >
          <motion.path
            ref={pathRef}
            fillRule="evenodd"
            initial={{ d: getPath(0) }}
            animate={{ d: d.get() }}
            d={d}
            transition={{ type: "spring", duration: 1 }}
          />
        </svg>
      </div>

      <motion.div
        className="flex-center fixed inset-x-0 top-0 z-20 h-0"
        style={{ y: titleY }}
      >
        <motion.div variants={itemVariants} className="flex-center md:gap-8">
          <Image alt="Logo" src={logoImage} className="max-sm:h-12"></Image>
          <Image alt="Logo" src={brandImage} className="max-sm:h-10"></Image>
        </motion.div>
      </motion.div>

      <div className="flex-center mx-auto h-full w-full max-w-2xl flex-1 flex-col gap-4 p-6 md:gap-8">
        <motion.h1
          variants={itemVariants}
          className="font-title text-3xl md:text-4xl"
        >
          Site en construction...
        </motion.h1>
        <motion.p variants={itemVariants}>
          Bonjour, je m’appelle Hélène Bazille, je suis conseillère conjugale et
          familiale. Je démarre mon activité à Mornant le 5 janvier 2024. Je
          vous accueille le lundi et le vendredi pour des consultations de
          conseil conjugal et familial, dans mon cabinet qui se situe au
          centre-ville.
        </motion.p>
        <motion.p variants={itemVariants}>
          Mon site internet est en cours de construction mais vous pouvez d’ores
          et déjà prendre rendez-vous en me contactant au{" "}
          <Chip
            as="a"
            size="sm"
            href="tel:+33783044613"
            className="bg-primaryContainer text-base"
            color="secondary"
            radius="sm"
          >
            07 83 04 46 13
          </Chip>{" "}
          ou en ligne en cliquant sur le bouton ci-dessous.
        </motion.p>
        <motion.div className="flex-center" variants={itemVariants}>
          <Button
            as="a"
            size="lg"
            href="https://cal.com/helenebazille-ccf"
            target="__blank"
            radius="full"
            variant="solid"
            color="secondary"
          >
            Prendre rendez-vous
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
