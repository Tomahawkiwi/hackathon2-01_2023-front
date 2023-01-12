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

function index({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-custom-dark">
      <EnergyTag energy={cars[0]?.engine as string} isSmallSize />
      <EnergyTag energy={cars[1]?.engine as string} isSmallSize={false} />
      <PriceTag price={cars[0]?.dailyPrice as number} isSmallSize />
      <PriceTag price={cars[1]?.dailyPrice as number} isSmallSize={false} />
      <CTA text="Bonjour" color="green" isSmallSize />
      <CTA text="Bonjour" color="red" isSmallSize={false} />
      <CTA text="Bonjour jkbvijz obdvj" color="blue" isSmallSize={false} />
      <CTA
        text="Bonjour jkbvijz obdvj"
        color="outlinedWhite"
        isSmallSize={false}
      />
      <CTA
        text="Bonjour jkbvijz obdvj"
        color="outlinedBlue"
        isSmallSize={false}
      />
      <CardResultsList cars={cars} />
    </div>
  );
}

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cars = await prisma.car.findMany({
    include: {
      brand: true,
      category: true,
      model: true,
    },
  });

  return {
    props: {
      cars,
    },
  };
};
