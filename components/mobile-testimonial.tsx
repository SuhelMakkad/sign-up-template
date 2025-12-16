"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/carousel"
import { cn } from "@/lib/utils"

import { Testimonial } from "./cards/testimonial"

type MobileTestimonialProps = {
  testimonials: Testimonial[]
  className?: string
}

const plugins = [
  Autoplay({
    playOnInit: true,
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  }),
]

export const MobileTestimonial = ({
  testimonials,
  className,
}: MobileTestimonialProps) => {
  return (
    <Carousel
      className={className}
      plugins={plugins}
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent className="ml-0">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-full pl-0">
            <article className="flex flex-col gap-3 text-center">
              <p className="text-muted-foreground/80 text-sm font-medium italic leading-relaxed">
                &ldquo;{testimonial.description}&rdquo;
              </p>

              <footer className="flex items-center justify-center gap-2">
                <span className="text-secondary-foreground text-sm font-semibold">
                  {testimonial.name}
                </span>
                <span className="text-muted-foreground/60 text-xs">•</span>
                <span className="text-muted-foreground/60 text-xs font-medium">
                  {testimonial.title}
                </span>
              </footer>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <ProgressDots testimonials={testimonials} />
    </Carousel>
  )
}

const ProgressDots = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const { api, currentIndex } = useCarousel()

  return (
    <div className="flex justify-center gap-1.5 mt-4">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "size-1.5 rounded-full transition-all duration-300",
            index === currentIndex
              ? "bg-primary w-4"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
          )}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  )
}
