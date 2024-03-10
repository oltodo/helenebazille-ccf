import { ComponentProps, forwardRef } from "react";
import clsx from "clsx/lite";

type Props = ComponentProps<"input"> & {
  inputClassName?: string;
  className?: string;
  label: string;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { inputClassName, className, label, ...inputProps },
  ref,
) {
  return (
    <label className={className}>
      <div className="mb-2 ml-2 block text-lg font-semibold">{label}</div>

      <input
        className={clsx(
          "ref:bg-sandDark h-14 w-full rounded-2xl px-6 text-xl focus:outline-terracotta",
          inputClassName,
        )}
        id="firstName"
        ref={ref}
        {...inputProps}
      />
    </label>
  );
});
