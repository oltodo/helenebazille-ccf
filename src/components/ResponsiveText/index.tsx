import clsx from "clsx/lite";

export type ReponsiveTextProps = {
  className?: string;
  children: string;
  alt: string;
};

export function ReponsiveText({
  className,
  children,
  alt,
}: ReponsiveTextProps) {
  return (
    <span
      className={clsx(className, "max-md:before:content-[attr(data-alt)]")}
      data-alt={alt}
    >
      <span className="max-md:hidden">{children}</span>
    </span>
  );
}
