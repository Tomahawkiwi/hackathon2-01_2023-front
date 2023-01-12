import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import prisma from "../../prisma/client";
import EnergyTag from "../../src/components/EnergyTag";
import PriceTag from "../../src/components/PriceTag";
import CTA from "../../src/components/CTA";
import CardResultsList from "../../src/components/CardResultsList";

function Driver({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-screen h-screen bg-custom-blue-endGrad flex flex-col justify-center items-center align-middle lg:flex-row-reverse lg:items-start">
      <div className="w-[91%] h-[250px] rounded-t-[25px] bg-custom-dark -mb-3 lg:h-[80%]">
        Map
      </div>
      <CardResultsList cars={cars} />
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

  return {
    props: {
      cars,
    },
  };
};
