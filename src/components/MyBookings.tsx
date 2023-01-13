import { Rent } from "@prisma/client";
import React from "react";

interface IProps {
  rents: Rent[] | undefined;
}
function MyBookings({ rents }: IProps) {
  const dateTime = new Date();

  const past: Array<string> = [];
  const current: Array<string> = [];
  const future: Array<string> = [];

  rents?.map((rent) => {
    if (dateTime > rent.start && dateTime < rent.end) {
      current.push(rent.id);
    }
    if (rent.end < dateTime) {
      past.push(rent.id);
    }
    if (rent.start > dateTime) {
      future.push(rent.id);
    }
    return 0;
  });

  console.log(past, current, future);

  return (
    <div>
      {past.map((id) => (
        <p>{id}</p>
      ))}
    </div>
  );
}

export default MyBookings;
