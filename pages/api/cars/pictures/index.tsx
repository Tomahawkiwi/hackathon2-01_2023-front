import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const carPicture = await prisma.carPicture.findMany();
        res.status(200).json(carPicture);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "POST":
      try {
        const newPicture = await prisma.carPicture.create({
          data: {
            title: req.body.url,
            url: req.body.url,
            description: req.body.description,
            carId: req.body.carId,
          },
        });
        res.status(200).json(newPicture);
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
