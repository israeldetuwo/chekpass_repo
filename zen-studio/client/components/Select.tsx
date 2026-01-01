import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options = [], children, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-0.5 w-full">
        <div className={cn(
          "flex items-center justify-between px-4 py-3 rounded border border-chekpass-black-150 bg-white cursor-pointer",
          className
        )}>
          <select
            ref={ref}
            className={cn(
              "flex-1 bg-transparent outline-none appearance-none cursor-pointer font-lato text-base leading-[150%] text-chekpass-black-370"
            )}
            {...props}
          >
            {label && <option value="">{label}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            {children}
          </select>
          <ChevronDown className="w-4 h-4 text-chekpass-black-250 pointer-events-none" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
