/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */ import Image from "next/image";

import React, { useState } from "react";

function UserProfile() {
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

  return (
    <div className="flex justify-center p-10">
      <div className="w-[80%] flex flex-col items-center space-y-10">
        <Image
          src="/avatar.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full w-[152px] h-[152px] border border-black"
        />

        <div className="space-y-5 w-full">
          <h3>John DOE</h3>
          <div className="flex justify-between">
            <p>Birthday:</p>
            <p>May 15, 1992</p>
          </div>
          <div className="flex justify-between">
            <p>Address: </p>
            <p>
              8 avenue Lincoln <br /> 64600 Anglet
            </p>
          </div>
          <div className="flex justify-between">
            <p>Email:</p>
            <p>john.doe@test.fr</p>
          </div>
          <div className="flex justify-between">
            <p>Phone:</p>
            <p> + 33 6 47 93 47 45</p>
          </div>
          <div className="flex justify-between">
            <p>Driving License:</p>
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
          <h3>My Bookings</h3>
          <div
            className="flex  w-[60%] justify-between border-4 rounded-full p-2"
            onClick={handleClickPast}
          >
            <p>Past</p>
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
          {isPastOpen && <div className="border-b">CONTENT</div>}

          <div
            className="flex  w-[60%] justify-between border-4 rounded-full p-2"
            onClick={handleClickCurrent}
          >
            <p>Current</p>
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
            <p>Future</p>
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

          <button type="button" className="border rounded-full w-2/3 p-2">
            Cancel this booking
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
