import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  let carBrand;

  switch (method) {
    case "GET":
      carBrand = await prisma.carBrand.findMany();
      res.status(200).json(carBrand);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
