import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  let carPicture;

  switch (method) {
    case "GET":
      carPicture = await prisma.carPicture.findMany();
      res.status(200).json(carPicture);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
