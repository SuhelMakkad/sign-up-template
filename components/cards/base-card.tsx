import { cn } from "@/lib/utils"

export type BaseCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  header: React.ReactNode
  body: React.ReactNode
  className?: string
}

export const BaseCard = ({ Icon, header, body, className }: BaseCardProps) => {
  return (
    <label
      className={cn(
        "p-3.5 rounded-[8.4px] bg-card flex flex-col gap-3.5 w-47.5 select-none cursor-pointer relative",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <Icon className="size-7" />
        {header}
      </div>
      {body}
    </label>
  )
}
