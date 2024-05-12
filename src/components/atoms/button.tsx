import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
  "nqh-inline-flex nqh-items-center nqh-justify-center nqh-whitespace-nowrap nqh-rounded-md nqh-text-sm nqh-font-medium nqh-transition-colors focus-visible:nqh-outline-none focus-visible:nqh-ring-1 focus-visible:nqh-ring-ring disabled:nqh-pointer-events-none disabled:nqh-opacity-50",
  {
    variants: {
      variant: {
        default:
          "nqh-bg-primary nqh-text-primary-foreground nqh-shadow hover:nqh-bg-primary/90",
        destructive:
          "nqh-bg-destructive nqh-text-destructive-foreground nqh-shadow-sm hover:nqh-bg-destructive/90",
        outline:
          "nqh-border nqh-border-input nqh-bg-background nqh-shadow-sm hover:nqh-bg-accent hover:nqh-text-accent-foreground",
        secondary:
          "nqh-bg-secondary nqh-text-secondary-foreground nqh-shadow-sm hover:nqh-bg-secondary/80",
        ghost: "hover:nqh-bg-accent hover:nqh-text-accent-foreground",
        link: "nqh-text-primary nqh-underline-offset-4 hover:nqh-underline",
      },
      size: {
        default: "nqh-h-9 nqh-px-4 nqh-py-2",
        sm: "nqh-h-8 nqh-rounded-md nqh-px-3 nqh-text-xs",
        lg: "nqh-h-10 nqh-rounded-md nqh-px-8",
        icon: "nqh-h-9 nqh-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
