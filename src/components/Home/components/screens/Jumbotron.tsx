import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { forwardRef, useState } from "react";
import clsx from "clsx/lite";

export const Jumbotron = forwardRef<HTMLDivElement>(function Jumbotron(_, ref) {
  const [scrollIndicatorDisplayed, setScrollIndicatorDisplayed] =
    useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollIndicatorDisplayed(latest === 0);
  });

  return (
    <div
      style={{
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTAuNjYgNTIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWluIj4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkQxOTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgZD0iTS4zMyAyNmM5NS4yOTEgMzMuMzMzIDE5Ni45NTggMzMuMzMzIDMwNSAwIDEwOC4wNDMtMzMuMzMzIDIwOS43MS0zMy4zMzMgMzA1IDAiIC8+Cjwvc3ZnPg==')`,
      }}
      className={clsx(
        "relative flex h-[100vh] w-[100vw] items-end gap-[10vmin] bg-[length:30vw] bg-repeat p-[5vmin] py-[10vmin]",
        "portrait:flex-col portrait:items-start portrait:justify-end",
      )}
      ref={ref}
    >
      <div className="flex flex-col gap-4 font-title text-[12vh] leading-none tracking-tight text-terracotta portrait:text-[10vw]">
        <div>
          <span>ACCUEILLIR.</span>
        </div>
        <div className="opacity-90">
          <span>ÉCOUTER.</span>
        </div>
        <div className="opacity-80">
          <span>SOUTENIR.</span>
        </div>
        <div className="opacity-70">
          <span>ACCOMPAGNER.</span>
        </div>
      </div>

      <motion.div
        className={clsx(
          "text-[12vmax] leading-none duration-[3s]",
          scrollIndicatorDisplayed && "animate-bounce",
        )}
        transition={{
          duration: scrollIndicatorDisplayed ? 1 : 0.1,
          delay: scrollIndicatorDisplayed ? 3 : 0,
        }}
        animate={{ opacity: scrollIndicatorDisplayed ? 1 : 0 }}
        initial={{ opacity: 0 }}
      >
        ↓
      </motion.div>
    </div>
  );
});
