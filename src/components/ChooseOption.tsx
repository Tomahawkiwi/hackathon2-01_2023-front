/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface IProps {
  setOpenOption: (value: boolean) => void;
}

function ChooseOption({ setOpenOption }: IProps) {
  const router = useRouter();

  const handleGoHomepage = () => {
    localStorage.setItem("isNew", "false");
    setOpenOption(false);
  };

  const handleGoConnection = () => {
    localStorage.setItem("isNew", "false");
    router.push("/auth/signin");
  };

  return (
    <div>
      <div className=" relative flex flex-col items-center ">
        <Image
          src="/logo/logo-vroom_blanc 1.svg"
          alt="logo de vroom"
          width={0}
          height={0}
          className="w-[451px] h-[157px] lg:w-[681px] lg:h-[387px] absolute top-[24px] lg:-top-5"
        />
        <div className="bg-white rounded-3xl  w-5/6 absolute top-28 pb-6 lg:w-[585px] lg:h-[625px] lg:top-[195px]">
          <div className="flex-all-center">
            <h1 className=" w-full flex justify-center p-6 pt-8 font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text text-4xl lg:text-5xl">
              Welcome vroomer !
            </h1>
            <div className="flex-all-center w-5/6 m-3 mb-8 lg:mb-12">
              <p className="text-xs lg:text-base ">
                <strong className="text-sm lg:text-xl">
                  A trip, a move or just a wish to drive ?
                </strong>
                <br /> Find and rent your car among all the renting Vroomers’s
                cars.
              </p>
              <p className="text-4xl mb-2 font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text ">
                /
              </p>
              <p className="text-xs lg:text-base">
                <strong className="text-sm lg:text-xl">
                  Your car is bored of not cruising ?
                </strong>
                <br />
                Offer to rent it to all the Driving Vroomers.
              </p>
            </div>
            <div
              className="bg-primary-blue-gradient flex flex-row justify-around items-center gap-4 rounded-full px-6 py-3 mb-5 w-2/3 h-20 lg:w-[291px] lg:h-[110px] "
              onClick={handleGoHomepage}
            >
              <Image
                src="/logo/Icon-car.svg"
                alt="logo de voiture"
                width={0}
                height={0}
                className="w-16 h-11 lg:w-20 lg:h-14"
              />
              <p className="font-Caveat text-white lg:text-3xl">
                I need <br />a car !
              </p>
            </div>
            <div
              className="p-1 bg-primary-blue-gradient flex flex-row items-center gap-4 rounded-full w-2/3 h-20 lg:w-[291px] lg:h-[110px]"
              onClick={handleGoConnection}
            >
              <div className="mix-blend-screen bg-white rounded-full flex justify-around items-center p-1 w-full h-full">
                <Image
                  src="/logo/Icon-money.svg"
                  alt="logo de voiture"
                  width={0}
                  height={0}
                  className="w-16 h-11 lg:w-20 lg:h-[70px] "
                />
                <p className="font-Caveat lg:text-3xl">
                  I propose <br />
                  my car !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseOption;
