import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const carCategory = await prisma.carCategory.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(carCategory);
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
        const deletedCategory = await prisma.carCategory.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedCategory);
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