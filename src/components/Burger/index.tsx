import clsx from "clsx/lite";

export type BurgerProps = {
  mode: "light" | "dark";
  onClick: () => void;
  className?: string;
  yummy: boolean;
};

export function Burger({ className, onClick, yummy, mode }: BurgerProps) {
  const color = mode === "light" ? "bg-sand" : "bg-terracotta";

  return (
    <button
      className={clsx(
        "group/burger flex shrink-0 items-center justify-center p-2 md:p-4",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <div
          className={clsx(
            "w-full transition-transform delay-200",
            yummy && "translate-y-[11px] rotate-[-135deg] md:translate-y-5",
          )}
        >
          <div
            className={clsx(
              "ml-auto h-[3px] w-6 rounded-full transition-all md:h-1 md:w-10",
              color,
              yummy
                ? "w-3.5 md:w-7"
                : "group-hover/burger:w-3.5 md:group-hover/burger:w-7",
            )}
          />
        </div>
        <div
          className={clsx(
            "h-[3px] w-8 rounded-full transition-transform delay-200 md:h-1 md:w-14",
            color,
            yummy && "-rotate-45",
          )}
        />
        <div
          className={clsx(
            "w-full transition-transform delay-200",
            yummy && "translate-y-[-11px] rotate-45 md:-translate-y-5",
          )}
        >
          <div
            className={clsx(
              "ml-auto h-[3px] w-4 rounded-full transition-all md:h-1 md:w-7",
              color,
              yummy
                ? "w-3.5 md:w-7"
                : "group-hover/burger:w-5 md:group-hover/burger:w-10",
            )}
          />
        </div>
      </div>
    </button>
  );
}
