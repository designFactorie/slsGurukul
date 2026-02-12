import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-primary-purple/20",
            secondary: "bg-secondary-red text-white hover:bg-secondary-red/90 shadow-lg hover:shadow-secondary-red/20",
            outline: "border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white",
            ghost: "text-primary-purple hover:bg-primary-purple/10",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-bold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
