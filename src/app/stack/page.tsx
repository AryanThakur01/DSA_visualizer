import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
// import Link from "next/link";
import React from "react";
import StackAnimation from "./components/StackAnimation";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <h1
        id="Stack"
        className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit"
      >
        Stack Implementation
        <Layers />
      </h1>
      <hr className="border-border mt-2 mb-10" />
      <StackAnimation />
    </>
  );
}
