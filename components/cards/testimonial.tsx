type TestimonialCardProps = {
  name: string
  title: string
  description: string
}

export const TestimonialCard = ({
  name,
  title,
  description,
}: TestimonialCardProps) => {
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
        {`“`}
        {description}
        {`”`}
      </p>
    </article>
  )
}
