import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import prisma from "../prisma/client";

export default function Home({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {cars.map((car) => (
        <div>{car.owner.firstname}</div>
      ))}
    </div>
  );
}

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
