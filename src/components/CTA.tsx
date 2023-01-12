import React from "react";

type Props = { text: string; isSmallSize: boolean; color: string };

function CTA({ text, isSmallSize, color }: Props) {
  const getColorBg = (): string => {
    if (color === "green") {
      return "bg-CTA-ok-green-gradient";
    }
    if (color === "red") {
      return "bg-error-red-gradient";
    }
    if (color === "white") {
      return "bg-custom-white";
    }
    if (color === "outlinedWhite") {
      return "";
    }
    if (color === "outlinedBlue") {
      return "";
    }
    return "bg-custom-blue-endGrad";
  };

  return (
    <div
      className={`w-fit max-w-[85%] flex-all-center font-bold rounded-full ${
        isSmallSize ? "px-5 py-2" : "px-8 py-3"
      } ${
        color === "white" ? "text-custom-blue-endGrad" : "text-custom-white"
      } ${color === "outlinedWhite" && "border-4"} ${
        color === "outlinedBlue" &&
        " text-custom-blue-endGrad border-4 border-[#019FE3]"
      } ${getColorBg()}`}
    >
      <p className={` ${isSmallSize ? "text-base" : "text-2xl"}`}>{text}</p>
    </div>
  );
}

export default CTA;
