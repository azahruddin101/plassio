import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-gold text-brand-green hover:bg-brand-gold/90 shadow-md",
  solid:
    "bg-brand-green text-white shadow-md hover:bg-brand-green-dark dark:bg-brand-green dark:hover:bg-brand-green-dark",
  outline:
    "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green",
  ghost: "text-brand-green hover:bg-brand-green/10 dark:text-brand-cream",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
