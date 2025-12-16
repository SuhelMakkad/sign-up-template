import { SignUpForm } from "@/components/sign-up-form"

export default function Home() {
  return (
    <main className="h-dvh grid grid-cols-9">
      <section className="col-span-5 bg-amber-100 lg:block hidden"></section>

      <section className="lg:col-span-4 col-span-full m-auto flex flex-col gap-6">
        <SignUpForm className="max-w-81.5 mx-auto text-center lg:text-start" />

        <p className="text-base font-semibold text-center whitespace-nowrap py-4.5 text-secondary-foreground">
          You&apos;ll receive an email with an invite link to join.
        </p>
      </section>
    </main>
  )
}
