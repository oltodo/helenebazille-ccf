import { ComponentProps, forwardRef } from "react";
import clsx from "clsx/lite";

export type ButtonProps = ComponentProps<"button"> & {
  size?: "normal" | "small";
  color?: "terracotta" | "sand" | "gunmetal";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { size = "normal", color = "terracotta", className, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          "h-12 rounded-full border bg-sand/30 px-6 text-lg font-semibold uppercase !leading-tight transition-colors def:text-terracotta",
          size === "normal" && "md:h-16 md:px-10 md:text-xl",

          color === "terracotta"
            ? "text-terracotta"
            : color === "sand"
              ? "text-sand"
              : "text-gunmetal",

          props.disabled
            ? "opacity-40"
            : color === "terracotta"
              ? "hover:bg-terracotta hover:text-sand active:bg-terracotta"
              : color === "sand"
                ? "hover:bg-sand hover:text-terracotta active:bg-sand"
                : "hover:bg-gunmetal hover:text-sand active:bg-gunmetal",

          className,
        )}
      />
    );
  },
);
