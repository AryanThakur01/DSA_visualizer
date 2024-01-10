import StarredElems from "@/components/profile/StarredElems";
import { auth } from "@/utils/auth";
import { PrismaClient } from "@prisma/client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
  const session = await auth();
  return (
    <div className="container py-5">
      <div className="flex justify-center p-5">
        <div>
          <Image
            width={80}
            height={100}
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
            className="h-20 rounded-full mx-10 my-2"
          />
        </div>
        <div>
          <p className="text-2xl">{session?.user?.name}</p>
          <div className="flex gap-3 text-xs">
            {/* <div className="flex items-center"> */}
            {/*   12 <Star height="13" /> */}
            {/* </div> */}
            <p>{session?.user?.email}</p>
          </div>
        </div>
      </div>
      <StarredElems />
    </div>
  );
};

export default page;
