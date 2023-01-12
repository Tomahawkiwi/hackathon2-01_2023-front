import React from "react";
import { TCarFull } from "../../types/data";

interface IProps {
  car: TCarFull;
}

function CarIconToFill({ car }: IProps) {
  const listBadges = [];

  const getListBadges = () => {
    if (car.smoking === true) {
      listBadges.push("Icon-smoke.svg");
    }
    if (car.smoking === false) {
      listBadges.push("Icon-no-smoke.svg");
    }
    if (car.babySeat === false) {
      listBadges.push("Icon-baby.svg");
    }
  };

  //     allItems =
  // [       distribManual: car.gearbox,
  //         noSmoking:car.,
  //         smoking: car.,
  //         babySeat: car.babySeat,
  //         airConditioner:car.,
  //         buetoothAudio:car.,]

  return (
    <div className="flex items-center">
      {/* <div
        className={`${
          isSmallSize ? "w-[31px] h-[31px]" : "w-[51px] h-[51px]"
        } relative bg-primary-blue-gradient rounded-full`}
      >
        <Image
          alt={energy}
          src={getIconEnergy()}
          fill
          className={`object-fill ${
            energy === "GASOLINE" || energy === "DIESEL"
              ? "scale-50"
              : "scale-75"
          }`}
        />
      </div>
      <div
        className={`bg-custom-white flex items-center rounded-full ${
          isSmallSize
            ? "text-sm -ml-4 w-fit h-5 pl-6 pr-3"
            : "text-lg -ml-6 w-fit h-8 pl-8 pr-5"
        } `}
      >
        <p>{capitalize(energy)}</p>
      </div> */}
    </div>
  );
}

export default CarIconToFill;
