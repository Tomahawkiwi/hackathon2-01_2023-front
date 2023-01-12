import Image from "next/image";
import React from "react";

type Props = { energy: string };

function EnergyTag({ energy }: Props) {
  return (
    <div>
      <div>
        <Image
          alt=""
          src="../../public/icons/Icon-gas(no-bg).svg"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p>Gasoline</p>
      </div>
    </div>
  );
}

export default EnergyTag;
