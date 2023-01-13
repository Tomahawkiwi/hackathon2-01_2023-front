/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// eslint-disable-next-line import/order
import axiosInstance from "../../../src/utils/axiosInstance";
import { FieldValues, useForm } from "react-hook-form";
import { carBrand, carCategory, carModel } from "@prisma/client";

function Addcar() {
  const ref = useRef<HTMLInputElement>(null);
  const [smoke, setSmoke] = useState(false);
  const [babySeat, setBabySeat] = useState(false);
  const [airCon, setAirCon] = useState(false);
  const [music, setMusic] = useState(false);
  const [models, setModels] = useState<carModel[]>([]);
  const [categories, setCategories] = useState<carCategory[]>([]);
  const [brands, setBrands] = useState<carBrand[]>([]);
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<File | null>();

  const handleClickSmoke = () => {
    setSmoke(!smoke);
  };
  const handleClickBabySeat = () => {
    setBabySeat(!babySeat);
  };

  const handleClickAirCon = () => {
    setAirCon(!airCon);
  };
  const handleClickMusique = () => {
    setMusic(!music);
  };

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("files", image as File);
    formData.append("smoke", smoke ? "true" : "false");
    formData.append("babySeat", babySeat ? "true" : "false");
    formData.append("aircon", airCon ? "true" : "false");
    formData.append("music", music ? "true" : "false");
    formData.append("model", data.model);
    formData.append("brand", data.brand);
    formData.append("category", data.category);

    const res = await axiosInstance.post("/cars", formData);
  };

  const getModels = async () => {
    const { data } = await axiosInstance.get("/models");

    setModels(data);
  };

  const getBrand = async () => {
    const { data } = await axiosInstance.get("/brands");

    setBrands(data);
  };
  const getCategories = async () => {
    const { data } = await axiosInstance.get("/categories");

    setCategories(data);
  };

  useEffect(() => {
    getModels();
    getBrand();
    getCategories();
  }, []);

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
      <div
        onClick={() => ref.current!.click()}
        className="bg-error-red-gradient w-full h-[297px] rounded-t-xl flex-all-center mt-3 "
      >
        <Image
          src="/logo/upload3files.svg"
          alt="logo entreprise"
          width={0}
          height={0}
          className="h-[145px] w-[145px]"
        />
      </div>
      <input
        className="hidden"
        ref={ref}
        onChange={(e) => setImage(e.target.files![0]!)}
        type="file"
      />
      <div className="bg-custom-white w-full">
        <div className=" flex-all-center my-4">
          <div className="flex items-center justify-around w-full">
            <p className="font-semibold my-2">Is available for rent ?</p>
            <label className="switch" htmlFor="showAvailable">
              <input
                {...register("isAvailable")}
                type="checkbox"
                id="showAvailable"
              />
              <span className="slider round" />
            </label>
          </div>
          <div className="space-y-2  my-4  w-5/6 ">
            <div className="flex items-center justify-between w-full">
              <p>Nickname : </p>
              <input {...register("nickname")} type="text" className="box" />
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Model : </p>
              <select {...register("model")} name="model" id="">
                <option value="">Select a model</option>
                {models.map((model) => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Brand : </p>
              <select {...register("brand")} name="brand" id="">
                <option value="">Select a brand</option>
                {brands.map((brand) => (
                  <option value={brand.id}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Age :</p>
              <input {...register("age")} type="text" className="box" />
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Size : </p>
              <select {...register("category")} className="box">
                <option value="">Select a size</option>
                {categories.map((cat) => (
                  <option value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Gearbox : </p>
              <select {...register("gearbox")} className="box">
                <option value="">Select a gearbox</option>
                <option value="AUTOMATIC">Automatic</option>
                <option value="MANUAL">Manual</option>
              </select>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Engine :</p>
              <select {...register("engine")} className="box">
                <option value="">Select an engine type</option>
                <option value="ELECTRIC">Electric</option>
                <option value="DIESEL">Diesel</option>
                <option value="GASOLINE">Gasoline</option>
                <option value="HYBRID">Hbvrid</option>
              </select>
            </div>
            <div className="space-y-4">
              <p className="font-Caveat flex text-custom-blue-endGrad ">
                More about it !
              </p>
              <textarea
                {...register("description")}
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
                onClick={handleClickMusique}
                className={music ? "opacity-25" : ""}
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
      <button type="button" onClick={handleSubmit(onSubmit)}>
        SUBMIT
      </button>
    </div>
  );
}

export default Addcar;
