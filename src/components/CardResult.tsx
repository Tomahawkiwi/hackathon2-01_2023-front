/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from "next/image";
import React from "react";
import { TCarFull } from "../types/data";
import capitalize from "../utils/capitalize";
import CTA from "./CTA";
import EnergyTag from "./EnergyTag";
import CarIconToFill from "./icons/CarIcons";
import PriceTag from "./PriceTag";

interface IProps {
  car: TCarFull;
}

function CardResult({ car }: IProps) {
  return (
    <div className="w-[91%] flex-x-center mt-4">
      <div className="w-full flex-x-center overflow-hidden rounded-t-[15px] bg-primary-blue-gradient-to-transparent mb-12">
        <div className="w-[97.5%] mt-[3.5px] h-[300px] relative overflow-hidden rounded-t-[15px] bg-custom-dark">
          {car.picture.length > 0 ? (
            <Image
              src={car.picture[0]!.url}
              alt={car.picture[0]!.title}
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src="/icons/Icon-car.svg"
              alt="No picture provided"
              fill
              className="object-fill opacity-40 scale-50"
            />
          )}
          <div className="w-full h-[300px] absolute">
            <div className="absolute top-[14px] right-[14px]">
              <PriceTag price={car.dailyPrice} isSmallSize={false} />
            </div>
            <div className="absolute bottom-[14px] left-[14px]">
              <EnergyTag energy={car.engine} isSmallSize={false} />
            </div>
          </div>
        </div>
        <div className="w-[97.5%] bg-custom-white px-5">
          <div className="flex-x-center">
            <p className="font-Caveat font-regular text-4xl text-custom-blue-endGrad mt-4">
              {capitalize(car.nickname!)}
            </p>
            <div className="flex mt-5">
              <p className="text-left text-lg font-semibold mr-5">
                Model:
                <br />
                Brand:
                <br />
                Size:
                <br />
                Age:
              </p>
              <p className="text-left text-lg max-w-[200px] truncate">
                {capitalize(car.model.name)}
                <br />
                {capitalize(car.brand.name)}
                <br />
                {capitalize(car.category.name)}
                <br />
                {car.odometer} km
              </p>
            </div>

            <div className="flex">
              <p className="min-w-[88px] w-1/4 font-Caveat text-custom-blue-endGrad text-2xl text-left my-7 ml-2 flex items-center">
                More about me:
              </p>
              <div className="w-full flex flew-wrap justify-center">
                <div>
                  <CarIconToFill car={car} isSmallSize={false} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-x-center">
            <CTA
              text={`Go with ${car.nickname}`}
              color="blue"
              isSmallSize={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardResult;
