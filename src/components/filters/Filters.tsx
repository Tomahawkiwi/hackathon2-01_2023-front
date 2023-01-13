import { carCategory } from "@prisma/client";
import Image from "next/image";
import React from "react";
import capitalize from "../../utils/capitalize";
import InputDate from "./Dates";

interface IProps {
  setFilterEnergy: (e: string) => void;
  setFilterSize: (e: string) => void;
  setBeginDateFilter: (e: string) => void;
  setEndDateFilter: (e: string) => void;
  beginDateFilter: string;
  endDateFilter: string;
  carCategories: carCategory[];
}

function Filters({
  setFilterEnergy,
  setFilterSize,
  carCategories,
  setBeginDateFilter,
  beginDateFilter,
  setEndDateFilter,
  endDateFilter,
}: IProps) {
  return (
    <div className="w-[343px]">
      <div className="mb-8">
        <div className="flex items-center mb-1">
          <div className="relative w-11 h-11">
            <Image
              src="/icons/filterIcons/Icon-calendar.svg"
              alt="calendrier"
              fill
              className="object-fill"
            />
          </div>
          <p className="font-Caveat font-regular text-2xl text-custom-white ml-3">
            When ?
          </p>
        </div>
        <InputDate
          setBeginDateFilter={setBeginDateFilter}
          beginDateFilter={beginDateFilter}
          setEndDateFilter={setEndDateFilter}
          endDateFilter={endDateFilter}
        />
      </div>

      <div className="flex mb-8 max-w-full justify-between">
        <div className="">
          <div className="flex items-center mb-1">
            <div className="relative w-11 h-11">
              <Image
                src="/icons/filterIcons/Icon-car.svg"
                alt="calendrier"
                fill
                className="object-fill"
              />
            </div>
            <p className="font-Caveat font-regular text-2xl text-custom-white ml-3">
              Size ?
            </p>
          </div>
          <div className="">
            <select
              name="size"
              id="size-select"
              className="w-fit max-w-[195px] flex-all-center font-semibold rounded-full px-3 py-2 text-lg"
              onChange={(e) => setFilterSize(e.currentTarget.value)}
            >
              <option value="NONE" selected>
                No matters
              </option>
              {carCategories.map((category) => (
                <option value={`${category.name.toUpperCase()}`}>
                  {capitalize(category.name)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <div className="flex items-center mb-1">
            <div className="relative w-11 h-11">
              <Image
                src="/icons/filterIcons/Icon-motor.svg"
                alt="calendrier"
                fill
                className="object-fill"
              />
            </div>
            <p className="font-Caveat font-regular text-2xl text-custom-white ml-3">
              Energy ?
            </p>
          </div>
          <div className="">
            <select
              name="energy"
              id="energy-select"
              className="w-fit flex-all-center font-semibold rounded-full px-3 py-2 text-lg"
              onChange={(e) => setFilterEnergy(e.currentTarget.value)}
            >
              <option value="NONE" selected>
                No matters
              </option>
              <option value="GASOLINE">Gasoline</option>
              <option value="DIESEL">Diesel</option>
              <option value="HYBRIDE">Hybride</option>
              <option value="ELECTRIC">Electric</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="relative w-11 h-11">
          <Image
            src="/icons/filterIcons/Icon-place.svg"
            alt="calendrier"
            fill
            className="object-fill"
          />
        </div>
        <p className="font-Caveat font-regular text-2xl text-custom-white ml-3">
          Where ?
        </p>
      </div>
    </div>
  );
}

export default Filters;
