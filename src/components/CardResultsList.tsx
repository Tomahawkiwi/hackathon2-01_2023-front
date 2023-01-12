import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { Car, User } from "@prisma/client";
import CardResult from "./CardResult";
import { TCarFull } from "../types/data";

interface IProps {
  cars: TCarFull[];
}

function CardResultsList({ cars }: IProps) {
  return (
    <div className="w-full">
      {cars.map((car) => (
        <div className="flex-x-center w-full">
          <CardResult key={car.id} car={car} />
        </div>
      ))}
    </div>
  );
}

export default CardResultsList;
