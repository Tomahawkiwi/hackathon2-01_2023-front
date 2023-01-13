import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const car = await prisma.car.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(car);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }

      break;
    case "PUT":
      try {
        const updatedCar = await prisma.car.update({
          where: {
            id: id as string,
          },
          data: {
            address: req.body.adress,
            airConditioner: req.body.airConditioner,
            babySeat: req.body.babySeat,
            bluetoothAudio: req.body.bluetoothAudio,
            brand: req.body.brand,
            category: req.body.category,
            comment: req.body.comment,
            dailyPrice: req.body.dailyPrice,
            description: req.body.description,
            engine: req.body.engine,
            gearbox: req.body.gearbox,
            carBrandId: req.body.carBrandId,
            carModelId: req.body.carModelId,
            categoryId: req.body.categoryId,
            isAvailable: req.body.isAvailable,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            mileagePackage: req.body.mileagePackage,
            model: req.body.model,
            nickname: req.body.nickname,
            odometer: req.body.odometer,
            owner: req.body.owner,
            ownerId: req.body.ownerId,
            picture: req.body.picture,
            registrationCertificate: req.body.registrationCertificate,
            rent: req.body.rent,
            smoking: req.body.smoking,
          },
        });
        res.status(200).json(updatedCar);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "DELETE":
      try {
        const deletedCar = await prisma.car.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedCar);
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
