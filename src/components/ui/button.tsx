import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-400 text-white shadow-xs hover:bg-brand-300 focus-visible:ring-brand-800",
        destructive:
          "bg-destructive-500 text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border text-neutral-500 shadow-xs border-neutral-500 focus-visible:bg-neutral-100 hover:bg-neutral-50 dark:text-white dark:border-brand-500 dark:hover:bg-brand-500/10 dark:focus-visible:bg-brand-900/50 ",
        secondary:
          "bg-secondary-400 text-white shadow-xs hover:bg-secondary-600/90 focus-visible:ring-secondary-800",
        ghost:
          "hover:bg-accent  hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "underline-offset-4 hover:underline",
        neutral: "bg-neutral-400 text-white shadow-xs hover:bg-neutral-600/90 focus-visible:ring-neutral-800",
      },
      size: {
        primary: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "primary",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
