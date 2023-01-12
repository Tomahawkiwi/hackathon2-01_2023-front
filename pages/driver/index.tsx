import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import prisma from "../../prisma/client";
import Card from "../../src/components/Card";

function index({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(cars);
  return (
    <div>
      <Card cars={cars} />
    </div>
  );
}

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cars = await prisma.car.findMany({
    include: {
      owner: true,
    },
  });

  return {
    props: {
      cars,
    },
  };
};
