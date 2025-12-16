import { EmailNotificationCard } from "./email-notification-card"
import { WalletDormantCard, WalletMoveCard } from "./select-cards"

export const Cards = () => {
  return (
    <div className="flex gap-3.5 overflow-hidden">
      <EmailNotificationCard />
      <WalletMoveCard />
      <WalletDormantCard />
    </div>
  )
}
