"use client"

import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel"

import { EmailNotificationCard } from "./email-notification-card"
import { WalletDormantCard, WalletMoveCard } from "./select-cards"

const directionDuration = 3500

const carouselItems = [EmailNotificationCard, WalletMoveCard, WalletDormantCard]
const plugins = [
  Autoplay({
    playOnInit: true,
    delay: directionDuration,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  }),
]

const duplicatedItems = [...carouselItems, ...carouselItems]

export const Cards = () => {
  return (
    <Carousel
      className="w-full"
      plugins={plugins}
      opts={{
        dragFree: true,
        loop: true,
        align: "start",
        duration: directionDuration,
      }}
    >
      <CarouselContent className="cursor-grab active:cursor-grabbing">
        {duplicatedItems.map((Card, index) => (
          <CarouselItem key={index} className="basis-auto h-auto select-none">
            <Card />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Left fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-42 bg-linear-to-r from-black/70 to-transparent z-10 pointer-events-none" />

      {/* Right fade effect */}
      <div className="absolute right-0 -top-5 -bottom-5 w-42 bg-linear-to-l from-black/70 to-transparent z-10 pointer-events-none" />
    </Carousel>
  )
}
