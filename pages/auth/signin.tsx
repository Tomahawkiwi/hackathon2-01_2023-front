import React from "react";
import Image from "next/image";

function Signin() {
  return (
    <div className="bg-primary-blue-gradient h-screen relative flex flex-col items-center ">
      <Image
        src="/logo/logo-vroom_blanc 1.svg"
        alt="logo de vroom"
        width={0}
        height={0}
        className="w-[451px] h-[157px] lg:w-[681px] lg:h-[387px] absolute top-[24px] lg:-top-5"
      />
      <div className="bg-white rounded-3xl  w-5/6 absolute top-28 pb-6 lg:w-[585px] lg:h-[625px] lg:top-[195px]">
        <div className="flex-all-center">
          <h1 className=" w-full flex justify-center p-6  font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text text-4xl lg:text-5xl">
            Welcome vroomer !
          </h1>
          <div className="flex-all-center w-5/6 m-3">
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
          <div className=" w-5/6  flex flex-col justify-between mt-5">
            <div>
              <div className="flex space-x-3 mb-3">
                <Image
                  src="/logo/Icon-email.svg"
                  alt="logo email"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    type="text"
                    placeholder="My email"
                    className="text-left -mb-4"
                  />
                  <div className="w-full h-1 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex space-x-3">
                <Image
                  src="/logo/Icon-password.svg"
                  alt="logo email"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    type="text"
                    placeholder="My password"
                    className="text-left -mb-4"
                  />
                  <div className="w-full h-1 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-5/6 mt-6">
            <button
              type="button"
              className="bg-primary-blue-gradient rounded-full h-10 w-28 text-white font-bold "
            >
              Sign in
            </button>
          </div>
          <div className="flex mt-6 justify-end w-5/6 items-center gap-2">
            <p className="text-xs">
              ...or you never <br /> experienced us ?
            </p>
            <div className="w-fit p-1 flex items-center align-middle justify-center rounded-full bg-primary-blue-gradient ">
              <button
                type="button"
                className="mix-blend-screen px-4 h-8 font-bold color-black rounded-full bg-white"
              >
                Let&apos;s sign up !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
