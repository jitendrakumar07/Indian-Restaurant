import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Badge style variants
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border-transparent",
        secondary: "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/90",
        destructive: "bg-red-600 text-white border-transparent hover:bg-red-700",
        outline: "text-foreground border border-input",
        success: "bg-green-600 text-white border-transparent hover:bg-green-700",
        warning: "bg-yellow-500 text-black border-transparent hover:bg-yellow-600",
        info: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Props with variant support
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

// Badge Component
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      role="status"
      {...props}
    />
  )
}

export { Badge, badgeVariants }
