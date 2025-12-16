"use client"

import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { useSubmitted } from "@/store/email-store"

import { SignUpForm } from "./form"
import { SuccessState } from "./success-state"

export const SignUpSection = ({ className }: { className?: string }) => {
  const submitted = useSubmitted()

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <SuccessState className={className} />
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn("flex flex-col gap-6", className)}
        >
          <SignUpForm />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
