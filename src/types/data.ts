import {
  Car,
  carBrand,
  carCategory,
  carModel,
  carPicture,
} from "@prisma/client";

export type TCarFull = Car & {
  brand: carBrand;
  category: carCategory;
  model: carModel;
  picture: carPicture[];
};
