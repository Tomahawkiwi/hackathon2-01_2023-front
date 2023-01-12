import React from "react";
import { GetServerSidePropsContext } from "next";
import jwt from "jsonwebtoken";
import UserProfile from "../src/components/userProfile";
import prisma from "../prisma/client";

function Myaccount() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const token = context.req.cookies.token?.split(" ")[1];

  if (!token) {
    return {
      redirect: "/auth/signin",
      props: {},
    };
  }

  const user = jwt.verify(token as string, process.env.JWT_SECRET as string);

  if (typeof user === "string") {
    return {
      redirect: "/auth/signin",
    };
  }

  const rents = await prisma.rent.findMany({
    where: { id: user.id },
  });

  return {
    props: {
      rents,
    },
  };
};

export default Myaccount;
