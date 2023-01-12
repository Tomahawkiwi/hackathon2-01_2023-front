import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = req.query;

  let user;
  let deletedUser;
  switch (method) {
    case "GET":
      user = await prisma.user.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(user);

      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "DELETE":
      deletedUser = await prisma.user.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(deletedUser);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
