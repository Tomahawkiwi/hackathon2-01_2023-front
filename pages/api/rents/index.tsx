import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const rent = await prisma.rent.findMany();
        res.status(200).json(rent);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "POST":
      try {
        const newRent = await prisma.rent.create({
          data: {
            userId: req.body.userId,
            carId: req.body.carId,
            start: req.body.start,
            end: req.body.end,
            numberOfDays: (req.body.start - req.body.end) / 86400000,
          },
        });
        res.status(200).json(newRent);
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
