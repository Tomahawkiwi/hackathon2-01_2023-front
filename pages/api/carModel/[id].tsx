import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let carModel;
  let deletedModel;
  switch (method) {
    case "GET":
      carModel = await prisma.carModel.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(carModel);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedModel = await prisma.carModel.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedModel);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
