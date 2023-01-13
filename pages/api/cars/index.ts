import { carBrand } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import prisma from "../../../prisma/client";
import asyncFormParse from "../../../src/utils/formParse";

cloudinary.v2.config({
  cloud_name: "dm6ytw7fe",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  console.log("ici ca marche");
  switch (method) {
    case "GET":
      try {
        const cars = await prisma.car.findMany();
        res.status(200).json(cars);
        break;
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;

    case "POST":
      try {
        const { files, fields } = await asyncFormParse(req);

        console.log(files, files.files[0].path);

        const image = await cloudinary.v2.uploader.upload(
          files.files[0].path,
          {
            secure: true,
          },
          async (err, result) => {
            if (err) {
              console.log(err);
              throw new Error(err.message);
            }
            return result;
          }
        );

        console.log(fields);

        const newCar = await prisma.car.create({
          data: {
            odometer: 238763103,
            mileagePackage: 123,
            registrationCertificate: "124",
            picture: {
              create: {
                title: "Main picture",
                url: image.url,
                description: "Main car picture",
              },
            },
            brand: {
              connect: {
                id: fields.brand[0],
              },
            },
            model: {
              connect: {
                id: fields.model[0],
              },
            },
            smoking: fields.smoke[0] === "true" && true,
            airConditioner: fields.aircon[0] === "true" && true,
            babySeat: fields.babySeat[0] === "true" && true,
            dailyPrice: 123,
            address: "123 route de bayonne",
            longitude: 1.234,
            latitude: 1.675,
            bluetoothAudio: false,
            description: "Super car",
            engine: "HYBRID",
            gearbox: "MANUAL",
            isAvailable: true,
            comment: "SUPER COMMENT",
            owner: {
              connect: {
                id: "5bbf8240-5b80-4498-bcb4-ac7f381ab46b",
              },
            },
            category: {
              connect: {
                id: fields.category[0],
              },
            },
          },
        });
        res.status(200).json(newCar);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
