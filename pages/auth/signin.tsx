import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../src/context/UserContext";

function Connection() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [credentials, setCredentails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="bg-primary-blue-gradient h-screen relative flex flex-col items-center  ">
      <Image
        src="/logo/logo-vroom_blanc 1.svg"
        alt="logo de vroom"
        width={0}
        height={0}
        className="w-[451px] h-[157px] lg:w-[681px] lg:h-[387px] absolute top-[120px] lg:-top-5"
      />
      <div className="bg-white rounded-3xl  w-5/6 absolute top-52 pb-6 lg:w-[585px] lg:h-[600px] lg:top-[195px]">
        <div className="flex-all-center">
          <h1 className=" w-full flex justify-center p-6  font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text text-4xl lg:text-5xl lg:pt-14 lg:pb-14">
            Let&apos;s connect !
          </h1>

          <div className=" w-5/6  flex flex-col justify-between lg:items-center mt-5 ">
            <div className="lg:pb-8 lg:w-2/3">
              <div className="flex space-x-3 mb-3">
                <Image
                  src="/logo/Icon-email.svg"
                  alt="logo email"
                  width={0}
                  height={0}
                  className="h-11 w-11"
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={credentials.email}
                    placeholder="My email"
                    className="text-left -mb-4 lg:-mb-2 -ml-5 lg:-ml-16 outline-none"
                  />
                  <div className="w-full h-1 lg:h-2 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
            </div>
            <div className="lg:pb-8 lg:w-2/3 ">
              <div className="flex space-x-3">
                <Image
                  src="/logo/Icon-password.svg"
                  alt="logo email"
                  width={0}
                  height={0}
                  className="h-11 w-11"
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={credentials.password}
                    placeholder="My password"
                    className="text-left -mb-4 -ml-5 lg:-mb-2 lg:-ml-16  outline-none"
                  />
                  <div className="w-full h-1 lg:h-2 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-5/6 mt-6 lg:w-5/6  lg:pr-20 lg:mb-2">
            <button
              onClick={() => signIn(credentials)}
              type="button"
              className="bg-primary-blue-gradient rounded-full h-10 w-28 text-white font-bold "
            >
              Sign in
            </button>
          </div>
          <div className="flex mt-6 justify-end w-5/6 items-center gap-2 lg:pr-20">
            <p className="text-xs lg:text-sm">
              ...or you never <br /> experienced us ?
            </p>
            <div className="w-fit p-1 flex items-center align-middle justify-center rounded-full bg-primary-blue-gradient ">
              <button
                type="button"
                className="mix-blend-screen px-4 h-8 font-bold color-black rounded-full bg-white"
                onClick={() => router.push("/auth/signup")}
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

export default Connection;
