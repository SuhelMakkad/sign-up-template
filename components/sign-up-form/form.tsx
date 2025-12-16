"use client"

import { useState } from "react"
import { ArrowRightIcon, LoaderIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { validateEmail } from "@/lib/form"
import { cn } from "@/lib/utils"
import { emailStore } from "@/store/email-store"

import { Button } from "../button"
import { Input } from "../input"

type ValidationError = {
  email?: string
}

export const SignUpForm = ({ className }: { className?: string }) => {
  const [errors, setErrors] = useState<ValidationError>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string

    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" })
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      emailStore.setState({
        email: email.toLowerCase(),
        submitted: true,
      })
    }, 1000)
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
    >
      <h1 className="text-[39px] font-medium mb-2 text-muted-foreground">
        Sign up for exclusive access.
      </h1>

      <div className="relative">
        <Input
          name="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-auto px-6 py-5 rounded-[8px] text-base font-medium placeholder:text-placeholder"
          placeholder="Your email address"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              key="email-error"
              layoutId="email-error"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.24 }}
              id="email-error"
            >
              <p className="text-sm text-destructive pt-2 font-medium">
                {errors.email}
              </p>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <SubmitButton isLoading={isLoading} />

      <p className="text-base font-semibold text-center whitespace-nowrap py-4.5 text-secondary-foreground">
        You&apos;ll receive an email with an invite link to join.
      </p>
    </form>
  )
}

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      size="lg"
      className={"w-full py-5 h-auto group overflow-hidden relative gap-0"}
      disabled={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`transition-transform duration-300 ease-out ${isHovered || isLoading ? "-translate-x-3" : ""}`}
      >
        Get started
      </span>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              rotate: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
          >
            <LoaderIcon className="size-4" />
          </motion.div>
        ) : (
          <motion.div
            key="arrow"
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -8,
            }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowRightIcon className="size-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
