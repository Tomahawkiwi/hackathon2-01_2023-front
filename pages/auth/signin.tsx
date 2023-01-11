import React from "react";
import Image from "next/image";

function Signin() {
  return (
    <div className="bg-primary-blue-gradient h-screen flex flex-col justify-center items-center ">
      <Image
        alt="logo de l'entreprise"
        src="/logos/logo_VROOM_white.svg.svg"
        width={681}
        height={387}
        className="absolute -top-10"
      />
      <div className="bg-white rounded-3xl w-[709px] h-[566px]">
        <div>
          <div>Welcome vroomer !</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
