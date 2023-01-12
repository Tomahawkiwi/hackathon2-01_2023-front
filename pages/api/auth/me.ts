import Cookies from "cookies";
import { NextApiHandler } from "next";
import jwt from "jsonwebtoken";
import getSecretKey from "../../../src/utils/auth";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;
  const cookies = new Cookies(req, res, { secure: true });

  if (method !== "POST") {
    return res.status(500).json("Method not allowed");
  }

  const token = cookies.get("token")?.split(" ")[1];
  if (!token) {
    return res.status(500).json("No auth token provided");
  }

  const secret = getSecretKey();

  const user = jwt.verify(token, secret);

  return res.status(200).json(user);
};

export default handler;
