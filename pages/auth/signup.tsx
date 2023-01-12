import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axiosInstance from "../../src/utils/axiosInstance";

type TUser = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

function Connection() {
  const router = useRouter();
  const urlPost = "/auth/signup";

  const { register, handleSubmit } = useForm<TUser>();

  const onSubmit = (user: TUser) => {
    axiosInstance.post(urlPost, {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    });
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
      <div className="bg-custom-white rounded-3xl  w-5/6 absolute top-52 pb-6 lg:w-[585px] lg:h-[600px] lg:top-[195px]">
        <div className="flex-all-center">
          <h1 className=" w-full flex justify-center p-6  font-Caveat bg-primary-blue-gradient text-transparent text-custom-blue-endGrad bg-clip-text text-4xl lg:text-5xl lg:pt-14 lg:pb-14">
            Let&apos;s register !
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-5/6  flex flex-col justify-between lg:items-center mt-5"
          >
            <div className="lg:pb-8 lg:w-2/3">
              <div className="flex space-x-3 mb-3">
                <Image
                  src="/logo/Icon-user.svg"
                  alt="logo user"
                  width={0}
                  height={0}
                  className="h-11 w-11"
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    {...register("lastname")}
                    placeholder="My lastname"
                    className="text-left -mb-4 lg:-mb-2 -ml-5 lg:-ml-16 outline-none"
                  />
                  <div className="w-full h-1 lg:h-2 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
              <div className="flex space-x-3 mb-3">
                <Image
                  src="/logo/Icon-user.svg"
                  alt="logo user"
                  width={0}
                  height={0}
                  className="h-11 w-11"
                />
                <div className="flex flex-col justify-around items-center w-full">
                  <input
                    {...register("firstname")}
                    placeholder="My firstname"
                    className="text-left -mb-4 lg:-mb-2 -ml-5 lg:-ml-16 outline-none"
                  />
                  <div className="w-full h-1 lg:h-2 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
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
                    {...register("email")}
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
                    {...register("password")}
                    placeholder="My password"
                    className="text-left -mb-4 -ml-5 lg:-mb-2 lg:-ml-16  outline-none"
                  />
                  <div className="w-full h-1 lg:h-2 bg-primary-blue-gradient rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex mt-6 justify-end  items-center gap-2 lg:pr-20 w-full">
              <div className="w-fit p-1 flex items-end  justify-center rounded-full bg-primary-blue-gradient ">
                <button
                  type="submit"
                  onClick={() => router.push("/")}
                  className="mix-blend-screen px-4 h-8 font-bold color-black rounded-full bg-custom-white"
                >
                  Let&apos;s sign up !
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connection;
