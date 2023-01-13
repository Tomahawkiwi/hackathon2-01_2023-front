import Image from "next/image";
import React, { ReactNode } from "react";
import { TCarFull } from "../../types/data";

interface IProps {
  car: TCarFull;
  isSmallSize: boolean;
}

function CarIcons({ car, isSmallSize }: IProps) {
  const listBadges: string[] = [];

  const getListBadges = () => {
    if (car.gearbox === "MANUAL") {
      listBadges.push("Icon-gearbox-manual.svg");
    }
    if (car.gearbox === "AUTOMATIC") {
      listBadges.push("Icon-gearbox-auto.svg");
    }
    if (car.smoking === true) {
      listBadges.push("Icon-smoke.svg");
    }
    if (car.smoking === false) {
      listBadges.push("Icon-no-smoke.svg");
    }
    if (car.babySeat === true) {
      listBadges.push("Icon-baby.svg");
    }
    if (car.airConditioner === true) {
      listBadges.push("Icon-air-condition.svg");
    }
    if (car.bluetoothAudio === true) {
      listBadges.push("Icon-music.svg");
    }
  };

  getListBadges();

  return (
    <div
      className={`flex flex-wrap justify-center my-8 ${
        isSmallSize ? "w-[150px]" : "w-[200px]"
      }`}
    >
      {listBadges.length > 0 &&
        listBadges.map(
          (badge: string): ReactNode => (
            <div
              className={`${
                isSmallSize ? "w-[35px] h-[35px]" : "w-[50px] h-[50px]"
              } flex-all-center m-[3px] relative bg-primary-blue-gradient rounded-full`}
            >
              <Image
                alt={badge}
                src={`/icons/${badge}`}
                fill
                className="object-fill scale-75"
              />
            </div>
          )
        )}
    </div>
  );
}

export default CarIcons;
