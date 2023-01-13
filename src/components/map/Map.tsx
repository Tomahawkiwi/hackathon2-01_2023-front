/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { MapView, LocationSearch } from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";
import { Car } from "@prisma/client";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import MarkerWithPopup from "./MarkerWithPopup";

Amplify.configure(awsExports);

async function signIn() {
  try {
    const user = await Auth.signIn(
      `${process.env.NEXT_PUBLIC_AWS_EMAIL}`,
      `${process.env.NEXT_PUBLIC_AWS_PASSWORD}`
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error signing in", error);
  }
}

interface IProps {
  cars: Car[];
}

export default function Map({ cars }: IProps) {
  const [geo, setGeo] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  useEffect(() => {
    signIn();
    navigator.geolocation.getCurrentPosition((position) => {
      setGeo(position.coords);
    });
  }, []);

  return (
    <div className="w-full flex justify-center align-middle items-center h-full">
      {geo && (
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
          initialViewState={{
            latitude: geo.latitude,
            longitude: geo.longitude,
            zoom: 11.5,
            maxZoom: 14,
          }}
        >
          {cars.map((car) => (
            <MarkerWithPopup
              key={car.id}
              car={car}
              latitude={car.latitude}
              longitude={car.longitude}
            />
          ))}
          <LocationSearch />
        </MapView>
      )}
    </div>
  );
}
