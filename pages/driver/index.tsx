import React, { useState } from "react";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Filters from "../../src/components/filters/Filters";
import prisma from "../../prisma/client";

import CardResultsList from "../../src/components/CardResultsList";
import Map from "../../src/components/map/Map";

function Driver({
  cars,
  carCategories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filterEnergy, setFilterEnergy] = useState<string | undefined>("");
  const [filterSize, setFilterSize] = useState<string | undefined>("");

  return (
    <div className="w-full bg-custom-blue-endGrad flex-x-center">
      <div className="relative w-[250px] h-[88px] mt-10 mb-10">
        <Image
          src="/logos/logo-vroom_blanc_resized.svg"
          alt="Logo Vroom"
          fill
          className="object-cover"
        />
      </div>
      <Filters
        setFilterEnergy={setFilterEnergy}
        setFilterSize={setFilterSize}
        carCategories={carCategories}
      />

      <div className="w-full flex flex-col items-center lg:flex-row-reverse lg:items-start">
        <div className="flex-x-center mb-14">
          <div className="w-[91%] min-w-[343px] max-w-[343px] relative z-20 rounded-[25px] mt-[240px]">
            <CardResultsList cars={cars} />
          </div>
          <div className="w-[91%] min-w-[343px] max-w-[343px] h-[360px] absolute z-0 rounded-t-[25px] overflow-hidden bg-custom-white lg:h-[80%]">
            <Map cars={cars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Driver;

export const getServerSideProps = async () => {
  const cars = await prisma.car.findMany({
    include: {
      brand: true,
      category: true,
      model: true,
      picture: true,
    },
  });
  const carCategories = await prisma.carCategory.findMany();

  return {
    props: {
      cars,
      carCategories,
    },
  };
};
