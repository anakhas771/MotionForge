"use client";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        accent: "bg-accent text-white hover:bg-accent-bright",
        outline:
          "border border-border bg-transparent hover:bg-surface-hover hover:border-foreground/20",
        ghost: "hover:bg-surface-hover",
        link: "underline-offset-4 hover:underline text-muted hover:text-foreground",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  animated?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animated = true, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const classes = cn(buttonVariants({ variant, size, className }));

    if (animated && !asChild) {
      return (
        <motion.button
          ref={ref}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          {...(props as HTMLMotionProps<"button">)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <Comp ref={ref} className={classes} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
