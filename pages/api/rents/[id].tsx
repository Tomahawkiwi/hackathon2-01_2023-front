import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const rent = await prisma.car.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(rent);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }

      break;
    case "PUT":
      try {
        const updatedRent = await prisma.rent.update({
          where: {
            id: id as string,
          },
          data: {
            carId: req.body.carId,
            userId: req.body.userId,
            start: req.body.start,
            end: req.body.end,
          },
        });
        res.status(200).json(updatedRent);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "DELETE":
      try {
        const deletedRent = await prisma.rent.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedRent);
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
