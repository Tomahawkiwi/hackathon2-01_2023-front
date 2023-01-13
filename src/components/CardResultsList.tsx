import Image from "next/image";
import CardResult from "./CardResult";
import { TCarFull } from "../types/data";

interface IProps {
  cars: TCarFull[];
}

function CardResultsList({ cars }: IProps) {
  return (
    <div className="w-full bg-custom-white rounded-[25px] mb-20 pb-8">
      <p className="w-4/5 font-Caveat font-regular text-2xl text-custom-dark pt-5 mx-auto text-left">
        {cars.length} {cars.length > 1 ? "results" : "result"}
      </p>

      {cars.length < 0 ? (
        cars.map((car) => (
          <div className="flex-x-center w-full max-w-[343px] bg-custom-white">
            <CardResult key={car.id} car={car} />
          </div>
        ))
      ) : (
        <div className="w-[91%] flex-x-center mt-4 mx-auto">
          <div className="w-full flex-x-center overflow-hidden rounded-t-[15px] bg-primary-blue-gradient-to-transparent mb-12">
            <div className="w-[97.5%] mt-[3.5px] h-[300px] relative overflow-hidden rounded-t-[15px] bg-custom-white mx-auto">
              <Image
                src="/icons/Icon-car-blue.svg"
                alt="No picture provided"
                fill
                className="object-fill opacity-40 scale-50"
              />
              <p className="absolute bottom-0 font-Caveat font-regular text-4xl text-custom-blue-endGrad mt-4">
                No car meets your research...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardResultsList;
