import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  const childrenArray = React.Children.toArray((props as any).children);
  const hasTextChild = childrenArray.some(
    (child) => typeof child === "string" && child.trim().length > 0,
  );
  const hasSrOnlyText = childrenArray.some(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type === "string" &&
      child.type === "span" &&
      typeof child.props?.className === "string" &&
      child.props.className.includes("sr-only") &&
      (typeof child.props.children === "string"
        ? child.props.children.trim().length > 0
        : React.Children.toArray(child.props.children).some(
            (c) => typeof c === "string" && c.trim().length > 0,
          )),
  );
  const hasAccessibleNameProp = Boolean(
    (props as any)["aria-label"] || (props as any)["aria-labelledby"],
  );
  const isIconOnly = !hasTextChild && !hasSrOnlyText && childrenArray.length > 0;

  let computedAriaLabel: string | undefined = undefined;
  if (isIconOnly && !hasAccessibleNameProp) {
    const firstEl = childrenArray.find((c) => React.isValidElement(c)) as
      | React.ReactElement
      | undefined;
    const typeName = firstEl && (firstEl.type as any)?.name;
    if (typeof typeName === "string" && typeName.length > 0) {
      const words = typeName
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/\s+/g, " ")
        .trim();
      computedAriaLabel = words.toLowerCase();
    } else if (typeof (props as any).title === "string") {
      computedAriaLabel = (props as any).title;
    } else {
      computedAriaLabel = "button";
    }
  }

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      aria-label={(props as any)["aria-label"] ?? computedAriaLabel}
      {...props}
    />
  );
})
Button.displayName = "Button";

export { Button, buttonVariants };
