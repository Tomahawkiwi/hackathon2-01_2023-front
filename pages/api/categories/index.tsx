import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const carCategory = await prisma.carCategory.findMany();
        res.status(200).json(carCategory);
        break;
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;

    case "POST":
      try {
        const newCategoy = await prisma.carCategory.create({
          data: {
            name: req.body.name,
          },
        });
        res.status(200).json(newCategoy);
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
