import { Car, Rent } from "@prisma/client";

import React from "react";

interface IProps {
  rents: Rent[] | undefined;
  cars: Car[] | undefined;
  isPastOpen: Boolean;
  isCurrentOpen: Boolean;
  isFutureOpen: Boolean;
}
function PastBookings({ rents }: IProps) {
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

  console.log(rents);

  const arrPeriodOfRent: Array<any> = [];
  const arrTimeOfRent = [];

  rents?.map((rent) => arrPeriodOfRent.push([rent.start, rent.end, rent.id]));

  arrPeriodOfRent.map((period) =>
    arrTimeOfRent.push((period[1] - period[0]) / 86400000, period[2])
  );

  return (
    <div className="">
      {past.map((rent) => (
        <div className="flex">
          <div className="">
            <p className="font-Caveat  text-[24px] text-custom-red py-2">
              {rent.car.nickname}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PastBookings;
