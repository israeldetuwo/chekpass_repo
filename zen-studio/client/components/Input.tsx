import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-0.5 w-full">
        <div className={cn(
          "flex items-center gap-6 px-4 py-3 rounded border border-chekpass-black-150 bg-white",
          error && "border-chekpass-accent",
          className
        )}>
          <input
            ref={ref}
            className={cn(
              "flex-1 bg-transparent outline-none font-lato text-base leading-[150%]",
              label ? "text-chekpass-black-250" : "text-chekpass-black-370",
              "placeholder:text-chekpass-black-370"
            )}
            {...props}
          />
          {icon && <div className="flex-shrink-0">{icon}</div>}
        </div>
        {error && (
          <p className="text-sm text-chekpass-accent px-4">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
