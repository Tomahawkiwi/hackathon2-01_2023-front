import Image from "next/image";
import React from "react";
import capitalize from "../utils/capitalize";

type Props = { energy: string; isSmallSize: boolean };

function EnergyTag({ energy, isSmallSize }: Props) {
  const getIconEnergy = (): string => {
    if (energy === "GASOLINE" || energy === "DIESEL") {
      return "/icons/Icon-gas_no-bg.svg";
    }
    if (energy === "ELECTRIC") {
      return "/icons/Icon-electric_no-bg.svg";
    }
    return "/icons/Icon-hybride_no-bg.svg";
  };

  return (
    <div className="flex items-center">
      <div
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
      </div>
    </div>
  );
}

export default EnergyTag;
