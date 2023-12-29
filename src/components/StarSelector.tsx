"use client";
import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface IStarSelector {}

const StarSelector: FC<IStarSelector> = ({}) => {
  const [star, setStar] = useState(false);
  const StarToggle = () => {
    setStar(!star);
  };
  return (
    <>
      <Button className="h-8" variant={"ghost"} onClick={StarToggle}>
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
