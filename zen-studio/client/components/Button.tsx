import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text-link";
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", icon, loading, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-lato font-extrabold text-base leading-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantStyles = {
      primary: "px-4 py-4 rounded bg-chekpass-accent text-white hover:bg-chekpass-accent/90",
      secondary: "px-4 py-4 rounded border border-chekpass-black-main bg-white text-chekpass-black-main hover:bg-chekpass-black-100",
      tertiary: "px-3 py-4 rounded bg-white text-chekpass-black-main hover:bg-chekpass-black-100",
      "text-link": "text-chekpass-black-main hover:underline font-extrabold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
