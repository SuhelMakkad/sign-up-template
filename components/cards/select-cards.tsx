import { Checkbox } from "../checkbox"
import { BarsIcon } from "../icons/bars"
import { ClockIcon } from "../icons/clock"
import { TriangleDownIcon } from "../icons/triangle-down"
import { BaseCard } from "./base-card"

const SelectIndicator = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-[2.8px] bg-secondary/50 flex gap-[2.8px] items-center justify-center text-[9.1px] font-medium p-[4.2px] w-fit">
      <span>{children}</span>
      <TriangleDownIcon className="text-[#96979A] shrink-0" />
    </div>
  )
}

export const WalletMoveCard = () => {
  return (
    <BaseCard
      Icon={BarsIcon}
      header={<Checkbox defaultChecked />}
      body={
        <div className="flex flex-col gap-3.75 mt-auto">
          <p className="text-[11.2px] font-medium w-37 text-secondary-foreground">
            Notify me when any wallets move more than
          </p>
          <SelectIndicator>$1,000.00</SelectIndicator>
        </div>
      }
    />
  )
}

export const WalletDormantCard = () => {
  return (
    <BaseCard
      Icon={ClockIcon}
      header={<Checkbox defaultChecked />}
      body={
        <div className="flex flex-col gap-3.75 mt-auto">
          <p className="text-[11.2px] font-medium w-28.5 text-secondary-foreground">
            Notify me when any wallet dormant for
          </p>
          <SelectIndicator>&gt; 30 days</SelectIndicator>
        </div>
      }
    />
  )
}
