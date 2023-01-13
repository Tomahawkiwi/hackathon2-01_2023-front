/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

function Schedule() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  console.log(date[0]);

  return (
    <div className="app">
      <div className="flex justify-center items-center gap-2">
        <button type="button" className="flex gap-2 items-center">
          <Image
            src="/logo/Icon-calendar.svg"
            alt="logo du calendrier"
            width={0}
            height={0}
            className="h-10 w-12"
          />
          <p className="text-custom-white font-Caveat">When ?</p>
        </button>
        {date.length > 0 ? (
          <div
            onClick={() => setOpenCalendar(!openCalendar)}
            className="text-custom-blue-endGrad font-Caveat bg-custom-white rounded-full px-4"
          >
            <span className="bold">Start:</span> {date[0].toDateString()}
            <br />
            <span className="bold">End:</span> {date[1].toDateString()}
          </div>
        ) : (
          <div className="text-custom-blue-endGrad font-Caveat bg-custom-white rounded-full px-4">
            Selected Date : {date.toDateString()}{" "}
          </div>
        )}
      </div>
      {openCalendar && (
        <div className="flex justify-center">
          <Calendar
            onChange={setDate}
            value={date}
            selectRange
            closeCalendar
            className=""
          />
        </div>
      )}
    </div>
  );
}

export default Schedule;
