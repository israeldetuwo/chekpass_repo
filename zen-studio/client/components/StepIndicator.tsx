import { cn } from "@/lib/utils";

interface Step {
  number: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

export default function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Step circles and lines */}
      <div className="flex items-center gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step circle */}
            <div className="flex items-center justify-center gap-2.5 relative">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center relative z-10",
                  step.isActive
                    ? "bg-chekpass-accent"
                    : step.isCompleted
                    ? "bg-chekpass-black-main"
                    : "bg-chekpass-black-150"
                )}
              >
                <span
                  className={cn(
                    "font-lato text-lg font-bold leading-[150%]",
                    step.isActive || step.isCompleted
                      ? "text-white"
                      : "text-chekpass-black-main"
                  )}
                >
                  {step.number}
                </span>
              </div>
            </div>

            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1",
                  step.isCompleted ? "bg-chekpass-black-main" : "bg-chekpass-black-150"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="flex items-start justify-between">
        {steps.map((step) => (
          <div
            key={step.number}
            className={cn(
              "flex-1 font-lato text-sm leading-[120%]",
              step.isActive
                ? "text-chekpass-accent font-black"
                : step.isCompleted
                ? "text-chekpass-black-main font-semibold"
                : "text-chekpass-black-370 font-normal",
              step.number === 2 && "text-center",
              step.number === 3 && "text-right"
            )}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
}
