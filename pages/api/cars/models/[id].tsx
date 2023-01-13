import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const carModel = await prisma.carModel.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(carModel);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }

      break;

    case "PUT":
      try {
        const updatedModel = await prisma.carModel.update({
          where: {
            id: id as string,
          },
          data: {
            name: req.body.name,
          },
        });
        res.status(200).json(updatedModel);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "DELETE":
      try {
        const deletedModel = await prisma.carModel.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedModel);
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
