import { Car, Rent } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface IProps {
  rents: Rent[] | undefined;
  cars: Car[] | undefined;
}
function MyBookings({ rents, cars }: IProps) {
  const dateTime = new Date();

  const past: Array<object> = [];
  const current: Array<object> = [];
  const future: Array<object> = [];

  rents?.map((rent) => {
    if (dateTime > rent.start && dateTime < rent.end) {
      current.push(rent);
    }
    if (rent.end < dateTime) {
      past.push(rent);
    }
    if (rent.start > dateTime) {
      future.push(rent);
    }
    return 0;
  });

  const arrPeriodOfRent = [];
  const arrTimeOfRent = [];

  rents?.map((rent) => arrPeriodOfRent.push([rent.start, rent.end, rent.id]));

  arrPeriodOfRent.map((period) =>
    arrTimeOfRent.push((period[1] - period[0]) / 86400000, period[2])
  );

  console.log(arrTimeOfRent);
  // console.log((rents[0].end - rents[0].start) / 86400000);

  return (
    <div className="">
      {past.map((rent) => (
        <div className="flex">
          <div className="border ">
            <p>{rent.car.nickname}</p>
            <p>{rent.car.categoryId}</p>
            <p>{rent.car.carBrandId}</p>
          </div>
          <div className="border w-1/3">{rent.car.ownerId}</div>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
