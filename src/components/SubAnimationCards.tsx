import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface ISubAnimationCards {
  title: string;
  description: string;
  pageLink: string;
}

const SubAnimationCards: FC<ISubAnimationCards> = ({
  pageLink,
  title,
  description,
}) => {
  return (
    <div className="border border-border p-4 rounded-lg hover:scale-[1.02] transition-all cursor-default flex flex-col">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-muted-foreground italic my-4">{description}</p>
      <div className="flex justify-end justify-self-end">
        <Link
          href={pageLink}
          className={cn(buttonVariants({ variant: "secondary" }), "")}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default SubAnimationCards;
