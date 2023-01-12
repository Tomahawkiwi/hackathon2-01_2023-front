/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import getSecretKey from "../../../src/utils/auth";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST":
      try {
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });

        const secret = getSecretKey();

        const { password: removedPassword, ...userWithoutPassword } = newUser;

        const token = jwt.sign(userWithoutPassword, secret, {
          expiresIn: "10m",
        });

        res.setHeader("Authorization", `Bearer ${token}`);

        res.status(200).json(userWithoutPassword);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
      }
      break;
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
