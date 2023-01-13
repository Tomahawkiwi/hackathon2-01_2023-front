import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const carPicture = await prisma.carPicture.findUniqueOrThrow({
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
    case "PUT":
      try {
        const updatedPicture = await prisma.carPicture.update({
          where: {
            id: id as string,
          },
          data: {
            title: req.body.title,
            url: req.body.url,
            carId: req.body.carId,
            description: req.body.description,
          },
        });
        res.status(200).json(updatedPicture);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    case "DELETE":
      try {
        const deletedCarPicture = await prisma.carPicture.delete({
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
