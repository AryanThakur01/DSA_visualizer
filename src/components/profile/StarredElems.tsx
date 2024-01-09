"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, useLayoutEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Loader, Trash2 } from "lucide-react";

interface IStarredElems {}

interface IFetchedStar {
  id: "String";
  visualName: "String";
  pageLink: "String";
  userId: "String";
}

const StarredElems: FC<IStarredElems> = () => {
  const [starred, setStarred] = useState<Array<IFetchedStar>>([]);
  const [uploading, setUploading] = useState(-1);
  const getStarredElems = async () => {
    const req = await fetch("/api/save", { method: "GET" });
    setStarred(await req.json());
  };
  useLayoutEffect(() => {
    getStarredElems();
  }, []);
  const RemoveStarred = async (elem: string, index: number) => {
    setUploading(index);
    try {
      let res: Response;
      res = await fetch(
        process.env.NEXTAUTH_URL || "http://localhost:3000" + "/api/save",
        { method: "DELETE", body: elem },
      );
      res = await res.json();
    } catch (error) {
      console.log(error);
    }
    await getStarredElems();
    setUploading(-1);
  };
  return (
    <section>
      <table className="mx-auto w-full max-w-xl">
        <tbody className="flex flex-col gap-4">
          <tr className="grid grid-cols-3 gap-16">
            <th className="text-start">DSA</th>
            <th>Page</th>
            <th>Delete</th>
          </tr>
          {starred.map((item, id) => (
            <tr id={"Stars" + id} className="grid grid-cols-3 gap-16">
              <td className="flex items-center">{item.visualName}</td>
              <td className="flex items-center justify-center">
                <Link
                  href={item.pageLink}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Visit
                </Link>
              </td>
              <td className="flex justify-center items-center text-destructive">
                {uploading === id ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Button
                    variant="link"
                    className="text-red-600 hover:scale-110 hover:invert-[10%]"
                    onClick={() => RemoveStarred(item.visualName, id)}
                  >
                    <Trash2 />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StarredElems;
