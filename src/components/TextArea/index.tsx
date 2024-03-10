import { ComponentProps, forwardRef } from "react";
import clsx from "clsx/lite";

type Props = ComponentProps<"textarea"> & {
  inputClassName?: string;
  className?: string;
  label: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ inputClassName, className, label, ...inputProps }, ref) {
    return (
      <label className={clsx("flex flex-col", className)}>
        <div className="mb-2 ml-2 block text-lg font-semibold">{label}</div>

        <textarea
          className={clsx(
            "ref:bg-sandDark ref:min-h-14 box-border w-full flex-1 rounded-2xl px-6 py-4 text-xl focus:outline-terracotta",
            inputClassName,
          )}
          id="firstName"
          ref={ref}
          {...inputProps}
        />
      </label>
    );
  },
);
