import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const carBrand = await prisma.carBrand.findMany();
        res.status(200).json(carBrand);
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
