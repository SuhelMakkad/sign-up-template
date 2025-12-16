import { EmailNotificationCard } from "./email-notification-card"
import { WalletDormantCard, WalletMoveCard } from "./select-cards"

export const Cards = () => {
  return (
    <div className="flex gap-3.5 overflow-auto">
      <EmailNotificationCard />
      <WalletMoveCard />
      <WalletDormantCard />
    </div>
  )
}
