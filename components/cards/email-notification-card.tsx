import { BellIcon } from "../icons/bell"
import { Input } from "../input"
import { BaseCard } from "./base-card"

export const EmailNotificationCard = () => {
  return (
    <BaseCard
      Icon={BellIcon}
      header={<span className="text-[9.1px] font-semibold">Save</span>}
      className="after:bg-linear after:bg-linear-to-b after:from-card after:to-[#E8EFFF] after:absolute after:inset-0 after:rounded-[8.4px] isolate after:-z-10"
      body={
        <div className="flex flex-col gap-3.75">
          <p className="text-sm font-medium w-32.25 text-secondary-foreground">
            We&apos;ll be sending notifications to you here
          </p>
          <Input
            readOnly
            value="test@test.com"
            className="text-[9.1px]! h-8.75 rounded-[5.6px] bg-background"
          />
        </div>
      }
    />
  )
}
