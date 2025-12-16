"use client"

import { CheckIcon } from "lucide-react"
import { motion } from "motion/react"

import { useTimer } from "@/hooks/use-timer"
import { useEmail } from "@/store/email-store"

export const SuccessState = ({ className }: { className?: string }) => {
  const email = useEmail()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div className="flex flex-col items-center text-center gap-6">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1,
          }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95, rotate: -5 }}
          className="size-20 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
        >
          <CheckIcon className="size-10 text-white" strokeWidth={3} />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-[39px] font-medium text-muted-foreground leading-tight">
            You&apos;re on the list!
          </h1>
          <p className="text-secondary-foreground text-base max-w-xs mx-auto">
            We&apos;ve sent a confirmation to
          </p>
        </motion.div>

        {/* Email Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 py-3 rounded-full bg-linear-to-r from-slate-50 to-slate-100 border border-slate-200 shadow-sm"
        >
          <span className="font-semibold text-primary text-lg">{email}</span>
        </motion.div>

        <Redirecting />
      </div>
    </motion.div>
  )
}

const Redirecting = () => {
  const { seconds } = useTimer({
    initialSeconds: 5,
    autoStart: true,
    countDown: true,
    onComplete: () => {
      window.location.href = "https://tradefox.live/"
    },
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-secondary-foreground/80 text-xs font-medium max-w-xs mx-auto">
        You will be redirected to the home page in <br />
        {seconds} seconds
      </p>
    </motion.div>
  )
}
