import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

function Schedule() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (date) => {
    console.log(date);
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-2 mb-2">
        <button type="button" className="flex gap-2 items-center  ">
          <Image
            src="/logo/Icon-calendar.svg"
            alt="logo du calendrier"
            width={0}
            height={0}
            className="h-10 w-12"
          />
          <p className="text-custom-white font-Caveat text-base">When ?</p>
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between items-center gap-1"
      >
        <p className="text-custom-white font-Caveat">From</p>
        <input
          {...register("start", { valueAsDate: true })}
          type="date"
          className="rounded-full px-3 text-custom-blue-endGrad w-32 h-8 text-sm"
        />
        <p className="text-custom-white font-Caveat">To</p>
        <input
          {...register("end", { valueAsDate: true })}
          type="date"
          className="rounded-full px-3 text-custom-blue-endGrad w-32 h-8 text-sm"
        />
        <button
          className="rounded-full bg-custom-white text-custom-blue-endGrad font-Caveat w-8 px-1 h-8"
          type="submit"
        >
          Go !
        </button>
      </form>
    </div>
  );
}

export default Schedule;
