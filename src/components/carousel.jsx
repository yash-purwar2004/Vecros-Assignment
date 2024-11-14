"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-3/4 mx-auto h-3/4"> {/* Reduced width and centered */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem. Langotiya
            jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    src: "https://i.pinimg.com/736x/c4/ad/38/c4ad3800c01a713078d583b3c5dd93a3.jpg",
    content: <DummyContent />,
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/710/681/273/silver-logo-samsung-wallpaper-preview.jpg",
    content: <DummyContent />,
  },
  {
    src: "https://www.shutterstock.com/image-photo/berlin-germany-june-7-2024-600nw-2478714005.jpg",
    content: <DummyContent />,
  },
  {
    src: "https://e1.pxfuel.com/desktop-wallpaper/117/493/desktop-wallpaper-suzuki-logo-mobile-1395x759-for-your-mobile-tablet.jpg",
    content: <DummyContent />,
  },
  {
    src: "https://www.shutterstock.com/shutterstock/videos/1105957975/thumb/6.jpg?ip=x480",
    content: <DummyContent />,
  },
  {
    src: "https://i.ytimg.com/vi/otiKF4rauDI/maxresdefault.jpg",
    content: <DummyContent />,
  },
];
