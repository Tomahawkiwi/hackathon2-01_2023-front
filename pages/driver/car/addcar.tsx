import React, { useState } from "react";
import Image from "next/image";

function Addcar() {
  const [smoke, setSmoke] = useState(false);
  const [babySeat, setBabySeat] = useState(false);
  const [manual, setManual] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [airCon, setAirCon] = useState(false);
  const [musique, setMusique] = useState(false);

  const handleClickSmoke = () => {
    setSmoke(!smoke);
  };
  const handleClickBabySeat = () => {
    setBabySeat(!babySeat);
  };
  const handleClickManual = () => {
    setManual(!manual);
  };
  const handleClickAutomatic = () => {
    setAutomatic(!automatic);
  };
  const handleClickAirCon = () => {
    setAirCon(!airCon);
  };
  const handleClickMusique = () => {
    setMusique(!musique);
  };

  return (
    <div className="bg-custom-blue-endGrad  flex-x-center p-6">
      <Image
        src="/logo/logo-vroom_blanc 1.svg"
        alt="logo entreprise"
        width={0}
        height={0}
        className="h-[66px] w-[187px]"
      />

      <div className=" w-full">
        <button
          type="button"
          className="rounded-full flex items-center gap-1 border-2 border-white px-3 py-1 text-custom-white"
        >
          <Image
            src="/logo/Polygon 1.svg"
            alt="logo entreprise"
            width={0}
            height={0}
            className="h-[15px] w-[15px]"
          />
          Return to my cars
        </button>
      </div>
      <div className="bg-error-red-gradient w-full h-[297px] rounded-t-xl flex-all-center mt-3 ">
        <Image
          src="/logo/upload3files.svg"
          alt="logo entreprise"
          width={0}
          height={0}
          className="h-[145px] w-[145px]"
        />
      </div>
      <div className="bg-custom-white w-full">
        <div className=" flex-all-center my-4">
          <div className="flex items-center justify-around w-full">
            <p className="font-semibold my-2">Is available for rent ?</p>
            <label className="switch" htmlFor="showAvailable">
              <input type="checkbox" id="showAvailable" />
              <span className="slider round" />
            </label>
          </div>
          <div className="space-y-2  my-4  w-5/6 ">
            <div className="flex items-center justify-between w-full">
              <p>Nickname : </p>
              <input type="text" className="box" />
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Model : </p>
              <input type="text" className="box" />
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Brand : </p>
              <select className="box">
                <option value="">e</option>
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Age :</p>
              <input type="text" className="box" />
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Size : </p>
              <select className="box">
                <option value="">e</option>
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Engine :</p>
              <select className="box">
                <option value="">e</option>
              </select>
            </div>
            <div className="space-y-4">
              <p className="font-Caveat flex text-custom-blue-endGrad ">
                More about it !
              </p>
              <textarea
                placeholder=""
                name=""
                id=""
                className="border-4 w-full rounded-3xl h-24 border-[#2196f3] text-align"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={handleClickAirCon}
                className={airCon ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-air-condition.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />
              </button>
              <button
                type="button"
                onClick={handleClickBabySeat}
                className={babySeat ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-baby.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />{" "}
              </button>

              <button
                type="button"
                onClick={handleClickAutomatic}
                className={automatic ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-gearbox-auto.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />{" "}
              </button>

              <button
                type="button"
                onClick={handleClickManual}
                className={manual ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-gearbox-manual.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />{" "}
              </button>

              <button
                type="button"
                onClick={handleClickMusique}
                className={musique ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-music.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />{" "}
              </button>

              <button
                type="button"
                onClick={handleClickSmoke}
                className={smoke ? "opacity-25" : ""}
              >
                <Image
                  src="/icons/Icon-smoke.svg"
                  alt="pictograme"
                  width={10}
                  height={10}
                  className="h-14 w-14 ml-2 mb-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addcar;
