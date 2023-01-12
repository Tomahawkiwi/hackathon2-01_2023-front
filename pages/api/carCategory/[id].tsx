import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let carCategory;
  let deletedCategory;
  switch (method) {
    case "GET":
      carCategory = await prisma.carCategory.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(carCategory);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedCategory = await prisma.carCategory.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedCategory);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
