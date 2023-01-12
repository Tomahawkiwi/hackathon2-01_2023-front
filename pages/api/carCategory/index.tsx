import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  let carCategory;

  switch (method) {
    case "GET":
      carCategory = await prisma.carCategory.findMany();
      res.status(200).json(carCategory);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
