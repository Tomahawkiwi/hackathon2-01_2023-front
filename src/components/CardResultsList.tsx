import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { Car, User } from "@prisma/client";
import prisma from "../../prisma/client";
import CardResult from "./CardResult";

function CardResultsList({ cars }: any) {
  return (
    <div>
      <div>
        {cars.map((car: any) => (
          <div className="border w-1/3">
            <div>{car.category.name}</div>
            <div>{car.brand.name}</div>
            <div>{car.model.name}</div>
            <div>{car.dailyPrice} €</div>
            <div>{car.address}</div>
          </div>
        ))}
        <CardResult cars={cars} />
      </div>
    </div>
  );
}

export default CardResultsList;
