import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel"

export type Testimonial = {
  name: string
  title: string
  description: string
}

const TestimonialCard = ({ name, title, description }: Testimonial) => {
  return (
    <article
      className="flex flex-col gap-5 bg-card p-5 rounded-[12px] shrink-0"
      style={{
        maxWidth: `${description.length * 3.75}px`,
      }}
    >
      <header className="flex gap-2 items-center">
        <span className="text-secondary-foreground text-base font-semibold">
          {name}
        </span>
        <span className="text-[13px] font-medium text-[#96979A]">{title}</span>
      </header>

      <p className="text-[#1D2129] text-base font-medium">
        {`"`}
        {description}
        {`"`}
      </p>
    </article>
  )
}

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent className="cursor-grab active:cursor-grabbing">
        <CarouselItem className="basis-auto w-1/3" />
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-auto select-none">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
        <CarouselItem className="basis-auto w-40" />
      </CarouselContent>
    </Carousel>
  )
}
