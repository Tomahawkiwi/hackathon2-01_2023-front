/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import Image from "next/image";
import React, { useState } from "react";
import { Car, Rent } from "@prisma/client";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useAuth } from "../context/UserContext";
import MyBookings from "./MyBookings";

interface IProps {
  rents: Rent[] | undefined;
}

type TRentFull = Rent & {
  car: Car;
};

function UserProfile({ rents }: IProps) {
  const { user, isLoading } = useAuth();

  const [isPastOpen, setIsPastOpen] = useState(false);
  const [isCurrentOpen, setIsCurrentOpen] = useState(true);
  const [isFutureOpen, setIsFutureOpen] = useState(true);

  const handleClickPast = () => {
    setIsPastOpen(!isPastOpen);
  };

  const handleClickCurrent = () => {
    setIsCurrentOpen(!isCurrentOpen);
  };

  const handleClickFuture = () => {
    setIsFutureOpen(!isFutureOpen);
  };

  const date = new Date(user?.birthday as Date).toLocaleDateString();

  if (isLoading || !user) return <div>Loading ...</div>;

  // console.log(
  //   rents[0].car.nickname,
  //   dateTime,
  //   rents[0]?.end.toLocaleDateString()
  // );

  return (
    <div className="flex justify-center p-10">
      <div className="w-[80%] flex flex-col items-center space-y-10">
        <div className="space-y-5 w-full ">
          <Image
            src={user?.profilPicture || "/defaultavatar.png"}
            width={100}
            height={100}
            alt="avatar"
            className="rounded-full w-[152px] h-[152px] border-8 border-[#019FE3] m-auto"
          />
          <h3 className="font-Caveat text-[42px] pb-10 text-custom-blue-endGrad">
            {user?.firstname}
            <span> </span>
            {user.lastname}
          </h3>
          <div className="flex justify-between">
            <p className="font-semibold text-[18px]">Birthday:</p>
            <p className="text-[18px]">{date}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-[18px]">Address: </p>
            <p className="text-[18px]">{user.address}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[18px]">64100 Bayonne</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-[18px]">Email:</p>
            <p className="text-[18px]">{user?.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-[18px]">Phone:</p>
            <p className="text-[18px]"> {user.phoneNumber}</p>
          </div>
          <div className="flex justify-between  items-center">
            <p className="font-semibold text-[18px]">Driving License:</p>
            <div className="w-[45%]">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo/Icon-ok.png"
                  width={50}
                  height={50}
                  alt="icon ok"
                />
                <Image
                  src="/logo/UploadedAndVerified.png"
                  width={50}
                  height={50}
                  alt="uploaded and verify"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-5">
          <h3 className="font-Caveat text-[42px] py-10 text-custom-blue-endGrad ">
            My Bookings
          </h3>
          <div
            className="flex  w-[60%] justify-between border-4 rounded-full p-2 border-text"
            onClick={handleClickPast}
          >
            <p className="font-bold text-[18px] text-custom-red">Past</p>
            {isPastOpen ? (
              <Image
                src="/logo/PolygonPast.png"
                width={20}
                height={20}
                alt="select"
              />
            ) : (
              <Image
                src="/logo/PolygonPast.png"
                width={20}
                height={20}
                alt="select"
                className="-rotate-90"
              />
            )}
          </div>
          {isPastOpen && <MyBookings rents={rents} />}

          <div
            className="flex  w-[60%] justify-between border-4 rounded-full p-2"
            onClick={handleClickCurrent}
          >
            <p className="font-bold text-[18px] text-custom-green">Current</p>
            {isCurrentOpen ? (
              <Image
                src="/logo/PolygonCurrent.png"
                width={20}
                height={20}
                alt="select"
              />
            ) : (
              <Image
                src="/logo/PolygonCurrent.png"
                width={20}
                height={20}
                alt="select"
                className="-rotate-90"
              />
            )}
          </div>
          {isCurrentOpen && <div className="border-b">CONTENT</div>}
          <div
            className="flex  w-[60%] justify-between border-4 rounded-full p-2"
            onClick={handleClickFuture}
          >
            <p className="font-bold text-[18px] text-custom-blue-endGrad">
              Future
            </p>
            {isFutureOpen ? (
              <Image
                src="/logo/PolygonFuture.png"
                width={20}
                height={20}
                alt="select"
              />
            ) : (
              <Image
                src="/logo/PolygonFuture.png"
                width={20}
                height={20}
                alt="select"
                className="-rotate-90"
              />
            )}
          </div>
          {isFutureOpen && <div className="border-b">CONTENT</div>}

          <button
            type="button"
            className="border rounded-full w-2/3 p-2 h-[42px] bg-custom-blue-endGrad text-custom-white text-[20px]"
          >
            Cancel this booking
          </button>
          <hr className="border rounded-full h-[8px] bg-custom-blue-endGrad" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;