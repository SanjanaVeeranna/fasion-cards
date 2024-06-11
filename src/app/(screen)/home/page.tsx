"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "react-feather";

export default function App() {
  const [cards, setCards] = useState(
    Array(8)
      .fill(0)
      .map((_, index) => ({ id: index, isLiked: false, clickCount: 0 }))
  );

  const handleHeartClick = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isLiked: !card.isLiked,
            clickCount: card.isLiked
              ? card.clickCount - 1
              : card.clickCount + 1,
          };
        }
        return card;
      })
    );
  };

  const handleClick = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, isLiked: !card.isLiked };
        }
        return card;
      })
    );
  };

  return (
    <div>
      <div className="p-4 bg-white">
        <div className="text-center text-black text-4xl font-groteskMedium ">
          SELECTED {cards.reduce((acc, card) => acc + card.clickCount, 0)}
        </div>
        <div className="flex flex-wrap justify-center ">
          {cards.map((card, index) => (
            <div key={index} className="max-w-[300px] m-4">
              <div className="relative">
                <Image
                  src={"/Images/kurta1.avif"}
                  alt="img"
                  layout="responsive"
                  width={400}
                  height={100}
                  className="rounded-xl"
                />
                <div className="absolute top-0 right-0 p-4">
                  <Heart
                    className={`w-6 h-6 ${
                      card.isLiked ? "text-red-500" : "text-white-500"
                    } `}
                    onClick={() => handleHeartClick(card.id)}
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                  <div className="bg-brown rounded-xl p-4">
                    <ShoppingCart className="w-6 h-6 text-white-500" />
                  </div>
                </div>
              </div>
              <div className="pt-2 px-2">
                <div className="text-l text-darkBlue font-groteskMedium">
                  Amala Earth
                </div>
                <span className="text-default-400 font-groteskBook">
                  Chanderi Tissue Women...
                </span>

                <div className="flex flex-row gap-6 pt-2">
                  <div className="flex flex-row ">
                    <div className="text-purple font-groteskMedium text-1xl">
                      $8,500
                    </div>
                    <div className="pt-1 pl-2 text-default-400 line-through font-groteskBook text-sm">
                      $13,990
                    </div>
                  </div>
                  <div className="pl-7 text-lightGreen font-groteskBook">
                    63% OFF
                  </div>
                </div>
              </div>
              <div className="font-bold text-darkBlue pt-2 px-2 font-groteskBook">
                <div>Clicks: {card.clickCount} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
