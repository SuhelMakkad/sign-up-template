import { cn } from "@/lib/utils"

type TextSectionProps = {
  className?: string
  dir?: "ltr" | "rtl"
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export const TextSection = ({
  dir = "ltr",
  Icon,
  title,
  description,
  className,
}: TextSectionProps) => {
  const iconProps = {
    className: "size-8 text-white",
    bellFillOpacity: "0.2",
    bellFill: "#fff",
  }
  return (
    <section dir={dir} className={cn("flex flex-col gap-4 me-auto", className)}>
      <Icon {...iconProps} />
      <h2 className="text-[#F2F2F2] font-medium text-[31px]">{title}</h2>
      <p className="text-[#F2F2F2] text-base font-medium">{description}</p>
    </section>
  )
}
