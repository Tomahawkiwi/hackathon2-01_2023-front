import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let carPicture;
  let deletedCarPicture;
  switch (method) {
    case "GET":
      try {
        carPicture = await prisma.carPicture.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(carPicture);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      try {
        deletedCarPicture = await prisma.carPicture.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedCarPicture);
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
