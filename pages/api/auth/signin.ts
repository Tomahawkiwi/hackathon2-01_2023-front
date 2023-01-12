import bcrypt from "bcryptjs";
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import getSecretKey from "../../../src/utils/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  console.log("ICI ON EST");
  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;
        const logUser = await prisma.user.findUniqueOrThrow({
          where: {
            email,
          },
        });

        if (!bcrypt.compareSync(password, logUser.password)) {
          throw new Error("Invalid password");
        }

        const secret = getSecretKey();

        // password match
        const { password: _, ...userWithoutPassword } = logUser;
        const token = sign({ ...userWithoutPassword }, secret);
        console.log(token);
        res.setHeader("Authorization", `Bearer ${token}`);

        return res.status(200).json({
          ...userWithoutPassword,
        });
      } catch (error) {
        console.log(error);
        return res.status(405).end({ message: error });
      }
      break;
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
