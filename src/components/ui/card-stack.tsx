"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

let interval: ReturnType<typeof setInterval>;


type Card = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-secondary-900 bg-brand-900 h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            {card.thumbnail && <div className="relative w-full h-32 flex items-center rounded-lg overflow-hidden">
              <Image
                src={card.thumbnail}
                alt="web"
                fill
                className="object-cover"
              />
            </div>}
            <div>
              <p className="text-sm font-medium text-white md:text-base">
                {card.name}
              </p>
              <p className="text-xs md:text-sm text-brand-300 font-normal">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
