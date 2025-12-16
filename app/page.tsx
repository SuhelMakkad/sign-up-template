import Image from "next/image"

import { previewImage } from "@/components/assets"
import { Cards } from "@/components/cards"
import { Testimonials } from "@/components/cards/testimonial"
import { BellIcon } from "@/components/icons/bell"
import { EyeIcon } from "@/components/icons/eye"
import { LogoIcon } from "@/components/icons/logo"
import { SignUpForm } from "@/components/sign-up-form"
import { TextSection } from "@/components/text-section"
import { testimonials } from "@/data/testimonials"

export default function Home() {
  return (
    <main className="h-dvh grid grid-cols-9">
      <section className="col-span-5 isolate size-full gap-8 lg:flex hidden gradient-background bg-(--gradient-background-to) pt-10 pb-10 justify-between flex-col">
        <section className="grid grid-cols-2 items-center gap-9.5 ps-10">
          <TextSection
            Icon={BellIcon}
            className="max-w-80.5"
            title="Get notified when a highly correlated whale makes a move"
            description="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
          />
          <Cards />
        </section>

        <section className="grid grid-cols-2 gap-9.5 px-10">
          <Image
            src={previewImage}
            alt="Preview"
            width={previewImage.width}
            height={previewImage.height}
            className="h-auto w-83.75 object-cover"
          />

          <TextSection
            dir="rtl"
            Icon={EyeIcon}
            className="max-w-76.25"
            title="Watch what the whales are doing"
            description="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
          />
        </section>

        <section className="flex flex-col relative hide-on-small-height">
          <h3 className="text-[#F2F2F2] font-medium text-[31px] text-end px-10">
            Testimonials
            <hr className="border-secondary/50 mb-15 mt-5" />
          </h3>
          <Testimonials testimonials={testimonials} />
        </section>

        <LogoIcon className="size-15 text-white absolute bottom-8 left-10 -z-10 hide-on-small-height" />
      </section>

      <section className="lg:col-span-4 col-span-full m-auto flex flex-col gap-6">
        <SignUpForm className="max-w-81.5 mx-auto text-center lg:text-start" />

        <p className="text-base font-semibold text-center whitespace-nowrap py-4.5 text-secondary-foreground">
          You&apos;ll receive an email with an invite link to join.
        </p>
      </section>
    </main>
  )
}
