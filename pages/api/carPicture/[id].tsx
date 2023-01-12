import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let carPicture;
  let deletedCarPicture;
  switch (method) {
    case "GET":
      carPicture = await prisma.carPicture.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(carPicture);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedCarPicture = await prisma.carPicture.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedCarPicture);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
