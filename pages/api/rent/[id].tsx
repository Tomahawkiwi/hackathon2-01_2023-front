import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let rent;
  let deletedRent;
  switch (method) {
    case "GET":
      rent = await prisma.car.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(rent);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedRent = await prisma.rent.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedRent);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
