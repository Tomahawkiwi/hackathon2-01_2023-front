import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import prisma from "../prisma/client";
import Card from "../src/components/Card";

export default function Home({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Card cars={cars} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cars = await prisma.car.findMany({
    include: {
      owner: true,
      category: true,
      brand: true,
      model: true,
    },
  });

  return {
    props: {
      cars,
    },
  };
};
