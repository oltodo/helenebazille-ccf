import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx/lite";

import ArrowImage from "../../images/arrow.svg";

export const Jumbotron = forwardRef<HTMLDivElement>(function Jumbotron(_, ref) {
  const [scrollIndicatorDisplayed, setScrollIndicatorDisplayed] =
    useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    setScrollIndicatorDisplayed(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollIndicatorDisplayed(latest === 0);
  });

  return (
    <div
      style={{
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTAuNjYgNTIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWluIj4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkQxOTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgZD0iTS4zMyAyNmM5NS4yOTEgMzMuMzMzIDE5Ni45NTggMzMuMzMzIDMwNSAwIDEwOC4wNDMtMzMuMzMzIDIwOS43MS0zMy4zMzMgMzA1IDAiIC8+Cjwvc3ZnPg==')`,
      }}
      className={clsx(
        "relative flex h-[100vh] w-[100vw] gap-[5vh] bg-[length:40vh] bg-repeat p-[5vmin] pt-20 md:pt-32",
        "flex-col items-start justify-end",
      )}
      ref={ref}
    >
      <div className="my-auto flex flex-col gap-4 font-title text-[min(9.5vw,12vh,150px)] leading-none tracking-tight text-terracotta">
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
      <div
        className={clsx(
          "transition-opacity duration-0",
          scrollIndicatorDisplayed
            ? "opacity-100 delay-[3s]"
            : "opacity-0 delay-0",
        )}
      >
        <ArrowImage
          className={clsx(
            "h-[12vh] duration-[3s] md:h-[15vh]",
            scrollIndicatorDisplayed && "animate-bounce",
          )}
        >
          ↓
        </ArrowImage>
      </div>
    </div>
  );
});
