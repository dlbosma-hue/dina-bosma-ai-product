import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "retro-button whitespace-nowrap disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-grapefruit text-navy hover:bg-rose",
        destructive: "bg-rose text-navy hover:bg-grapefruit",
        outline: "bg-cream text-navy hover:bg-rose",
        secondary: "bg-sky text-navy hover:bg-rose",
        ghost: "border-transparent bg-cream text-navy hover:border-navy hover:bg-rose",
        link: "min-h-0 border-0 bg-transparent p-0 text-link underline-offset-4 hover:bg-transparent hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-11 px-3 text-sm",
        lg: "h-12 px-7",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
