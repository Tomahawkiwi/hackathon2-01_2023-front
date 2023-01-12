import React from "react";

type Props = { price: number; isSmallSize: boolean };

function PriceTag({ price, isSmallSize }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-primary-blue-gradient rounded-full
      font-Caveat font-regular text-custom-white ${
        isSmallSize ? "w-[60px] h-[60px]" : "w-[105px] h-[105px]"
      } `}
    >
      <div className="flex items-end space-x-1 -mt-2">
        <h2 className={`${isSmallSize ? "text-3xl" : "text-5xl"}`}>{price}</h2>
        <p className={`${isSmallSize ? "text-base" : "text-3xl"}`}>€</p>
      </div>
      <p className={`${isSmallSize ? "text-xs -mt-2" : "text-2xl -mt-3"}`}>
        per day
      </p>
    </div>
  );
}

export default PriceTag;
