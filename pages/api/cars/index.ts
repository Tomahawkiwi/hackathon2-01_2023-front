import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

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

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
