import { auth } from "@/utils/auth";
import { Star } from "lucide-react";
import React from "react";

const page = async () => {
  const session = await auth();

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
    </div>
  );
};

export default page;
