import * as React from "react"
import { cn } from "@/lib/utils"

// Main Card Wrapper
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl overflow-hidden border border-gray-200 bg-white text-gray-900 shadow-md transition hover:shadow-lg",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// Optional Card Image
const CardImage = ({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={src}
    alt={alt}
    className={cn("w-full h-48 object-cover", className)}
    {...props}
  />
)

// Shared prop type for optional padding
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean
}

// Card Header
const CardHeader = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        noPadding ? "" : "px-6 pt-6 pb-3",
        "flex flex-col gap-1.5",
        className
      )}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

// Card Title
const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-xl font-bold leading-snug tracking-tight text-red-900",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

// Optional description
const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

// Content area
const CardContent = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(noPadding ? "" : "px-6 pb-6", className)}
      {...props}
    />
  )
)
CardContent.displayName = "CardContent"

// Footer area
const CardFooter = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(noPadding ? "" : "px-6 pt-3 pb-6", "flex items-center", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

// Export all components
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
}
<Card>
  <CardImage src="/images/biryani.jpg" alt="Biryani" />
  <CardHeader>
    <CardTitle>Biryani Deluxe</CardTitle>
    <CardDescription>Spicy chicken biryani with saffron rice</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This dish is cooked with premium basmati rice, tender meat, and aromatic spices.</p>
  </CardContent>
</Card>
