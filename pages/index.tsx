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
        <div>
          <div>{car.brand.name}</div>
          <div>{car.owner.firstname}</div>
        </div>
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
      brand: true,
    },
  });

  return {
    props: {
      cars,
    },
  };
};
