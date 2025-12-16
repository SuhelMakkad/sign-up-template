"use client"

import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { validateEmail } from "@/lib/form"
import { cn } from "@/lib/utils"

import { Button } from "../button"
import { Input } from "../input"

type ValidationError = {
  email?: string
}

export const SignUpForm = ({ className }: { className?: string }) => {
  const [errors, setErrors] = useState<ValidationError>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string

    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" })
      return
    }
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

      <Button size="lg" className="w-full py-5 h-auto group overflow-hidden">
        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-2">
          Get started
        </span>
        <ArrowRightIcon className="size-4 opacity-0 -mr-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:mr-0" />
      </Button>
    </form>
  )
}
