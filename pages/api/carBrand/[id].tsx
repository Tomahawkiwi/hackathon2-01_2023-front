import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let carBrand;
  let deletedCar;
  switch (method) {
    case "GET":
      carBrand = await prisma.carBrand.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(carBrand);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedCar = await prisma.carBrand.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedCar);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
