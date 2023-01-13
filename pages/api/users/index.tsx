import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

/* eslint-disable */
function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await prisma.user.findMany();
        users.map((user) => exclude(user, ["password"]));
        res.status(200).json(users);
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
