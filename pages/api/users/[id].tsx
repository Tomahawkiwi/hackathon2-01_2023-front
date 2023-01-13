import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const user = await prisma.user.findUniqueOrThrow({
          where: {
            id: id as string,
          },
        });
        const { password: removedPassword, ...userWithoutPassword } = user;
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }

      break;
    case "PUT":
      try {
        const updatedUser = await prisma.user.update({
          where: {
            id: id as string,
          },
          data: {
            ...req.body,
          },
        });
        const { password: removedPassword, ...userWithoutPassword } =
          updatedUser;
        res.status(200).json(updatedUser);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;

    case "DELETE":
      try {
        const deletedUser = await prisma.user.delete({
          where: {
            id: id as string,
          },
        });
        res.status(200).json(deletedUser);
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
