"use client";
import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface IStarSelector {
  title: string;
  isStarred: boolean;
}

const StarSelector: FC<IStarSelector> = ({ title, isStarred }) => {
  const [uploading, setUploading] = useState(false);
  const [star, setStar] = useState(isStarred || false);
  const StarToggle = async () => {
    setUploading(true);
    try {
      let res: Response;
      const body = { visualName: title, pageLink: window.location.pathname };
      if (!isStarred) {
        res = await fetch(
          process.env.NEXTAUTH_URL || "http://localhost:3000" + "/api/save",
          { method: "POST", body: JSON.stringify(body) },
        );
      } else {
        res = await fetch(
          process.env.NEXTAUTH_URL || "http://localhost:3000" + "/api/save",
          { method: "DELETE", body: title },
        );
      }
      res = await res.json();
      setStar(!star);
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
  };
  return (
    <>
      <Button
        className="h-8"
        variant={"ghost"}
        onClick={StarToggle}
        disabled={uploading}
      >
        Star
        <Star
          className="ml-2"
          size="1.3rem"
          fill={star ? "gold" : ""}
          stroke={star ? "gold" : "white"}
        />
      </Button>
    </>
  );
};

export default StarSelector;
