"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React, { useState } from "react";
import Image from "next/image";

const CardComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <Card className="max-w-[300px] m-4">
      <CardHeader>
        <Image
          src={"/Images/womenethenic1.webp"}
          alt="img"
          layout="responsive"
          width={300}
          height={100}
          className="rounded-xl"
          onClick={handleImageClick}
        />
      </CardHeader>
      <CardBody className="pt-0">
        <div className="font-bold text-xl text-darkBlue">Amala Earth</div>
        <span className="text-xl text-default-400">
          Chanderi Tissue Women...
        </span>

        <div className="flex flex-row gap-6 pt-2">
          <div className="flex flex-row ">
            <div className="font-semibold text-xl text-purple">$8,500</div>
            <div className="pl-2 pt-1 text-default-500 text-l line-through">
              $13,990
            </div>
          </div>
          <div className="font-semibold text-xl text-lightGreen pl-5">
            63% OFF
          </div>
        </div>
      </CardBody>
      <CardFooter className="font-bold text-darkBlue pt-0">
        <div>Clicks: {clickCount}</div>
      </CardFooter>
    </Card>
  );
};

export default function App() {
  return (
    <div className="p-4 bg-white">
      <div className="text-center text-black text-4xl">SELECTED {0}</div>
      <div className="flex flex-wrap justify-center">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <CardComponent key={index} />
          ))}
      </div>
    </div>
  );
}
