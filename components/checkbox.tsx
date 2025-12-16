"use client"

import { type ComponentProps } from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"

export const Checkbox = ({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-transparent data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-transparent focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[5px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="14" height="14" rx="4.2" fill="#0071E3" />
          <path
            d="M6.26412 10.3277C6.56921 10.3277 6.79986 10.2106 6.95607 9.97627L10.3353 4.8837C10.3914 4.80071 10.4329 4.71895 10.4597 4.6384C10.4866 4.55542 10.5 4.47609 10.5 4.40043C10.5 4.19053 10.4268 4.01724 10.2803 3.88056C10.1363 3.74144 9.95816 3.67188 9.74582 3.67188C9.59937 3.67188 9.4749 3.70116 9.37238 3.75974C9.27232 3.81588 9.17713 3.91351 9.08682 4.05263L6.24948 8.50817L4.82897 6.80577C4.67521 6.62759 4.48239 6.53851 4.25052 6.53851C4.0333 6.53851 3.85391 6.60807 3.71234 6.74719C3.57078 6.88631 3.5 7.06082 3.5 7.27072C3.5 7.36591 3.51464 7.45622 3.54393 7.54165C3.57566 7.62463 3.63302 7.71128 3.716 7.80158L5.60146 10.0239C5.77476 10.2264 5.99564 10.3277 6.26412 10.3277Z"
            fill="white"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
