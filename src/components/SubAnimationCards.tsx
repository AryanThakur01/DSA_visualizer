import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

interface ISubAnimationCards {
  title: string;
  description: string;
  pageLink: string;
  image: string;
}

const SubAnimationCards: FC<ISubAnimationCards> = ({
  pageLink,
  title,
  description,
  image,
}) => {
  return (
    <div className="border border-border p-4 rounded-lg hover:scale-[1.02] transition-all cursor-default flex flex-col">
      <div className="bottom-6 flex gap-2 pl-4 relative top-1">
        <div className="bg-gray-800 w-16 h-2 rounded-full"></div>
        <div className="bg-gray-800 w-16 h-2 rounded-full"></div>
      </div>
      <Image
        width={1920}
        height={1080}
        src={image}
        className="border-[0.6rem] border-gray-800 rounded-xl w-full md:min-h-[10rem] mb-4"
      />
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-muted-foreground italic my-4">{description}</p>
      <div className="flex justify-end mt-auto">
        <Link
          href={pageLink}
          className={cn(buttonVariants({ variant: "secondary" }), "w-32")}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default SubAnimationCards;
