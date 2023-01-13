/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Heading, Text } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import Image from "next/image";
import { Car } from "@prisma/client";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";

Amplify.configure(awsExports);

export default function MarkerWithPopup({
  latitude,
  longitude,
  car,
}: {
  latitude: number;
  longitude: number;
  car: Car;
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = ({
    originalEvent,
  }: mapboxgl.MapboxEvent<MouseEvent>) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  return (
    <>
      <Marker
        latitude={latitude}
        longitude={longitude}
        onClick={handleMarkerClick}
      >
        <div className="flex-x-center transform -translate-y-1/2">
          <div className="bg-custom-white font-Caveat text-xl text-custom-blue-endGrad rounded-md px-2 py-1">
            <p>
              <span className="text-3xl mr-1">{car.dailyPrice}</span>€ / day
            </p>
          </div>
          <div className="relative w-14 h-14">
            <Image
              alt={`Position of ${car.nickname}`}
              src="/icons/Icon-place.svg"
              fill
              className="object-fill"
            />
          </div>
        </div>
      </Marker>

      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
        >
          <Heading level={2}>{car.nickname}</Heading>
          <Text>{car.description}</Text>
          <Text>{car.dailyPrice}€ per day !</Text>
          <Image
            src="https://www.presse-citron.net/app/uploads/2020/10/model-3-2020.jpg"
            width={100}
            height={100}
            alt="alt"
          />
        </Popup>
      )}
    </>
  );
}
