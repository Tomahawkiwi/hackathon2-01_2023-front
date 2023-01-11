import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let car;
  switch (method) {
    case "GET":
      car = await prisma.car.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });

      res.status(200).json(car);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
