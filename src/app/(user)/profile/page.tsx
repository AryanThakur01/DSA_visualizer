import StarredElems from "@/components/profile/StarredElems";
import { auth } from "@/utils/auth";
import { PrismaClient } from "@prisma/client";
import { Star } from "lucide-react";
import { JWTDecodeParams, decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
  const session = await auth();
  await (async () => {
    const cookie = cookies().get("next-auth.session-token");
    if (!session || !cookie || !process.env.NEXTAUTH_SECRET) return;
    const key: JWTDecodeParams = {
      token: cookie.value,
      secret: process.env.NEXTAUTH_SECRET,
    };
    const user = await decode(key);
    if (!user) return;

    const Starred = await prisma.starredVisualization.findMany({
      where: {
        userId: user.sub || "",
      },
    });
  })();
  return (
    <div className="container py-5">
      <div className="flex justify-center p-5">
        <div>
          <img
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
            className="h-20 rounded-full mx-10 my-2"
          />
        </div>
        <div>
          <p>{session?.user?.name}</p>
          <div className="flex gap-3 text-xs">
            <div className="flex items-center">
              12 <Star height="13" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <StarredElems />
    </div>
  );
};

export default page;
