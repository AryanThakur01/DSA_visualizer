"use client";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
// import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function StackAnimation({}: Props) {
  const [value, setValue] = useState<string>("");
  const pushVal = () => {
    let val: string | number = value.trim();
    if (val === "") return;
    let stack = document.getElementById("stackContainer");
    let block = document.createElement("div");
    block.innerHTML = value;
    block.className =
      "border border-border rounded-md text-muted-foreground h-10 flex items-center justify-center animate-stack-insert";
    stack?.prepend(block);
    setValue("");
  };
  const popVal = () => {
    let stack = document.getElementById("stackContainer");
    if (stack?.firstElementChild) stack?.removeChild(stack.firstElementChild);
  };
  return (
    <div className="flex gap-8 flex-col items-center">
      <div className="w-fit flex flex-col gap-2">
        <div className="flex gap-1">
          <input
            type="text"
            className="outline-none px-2 w-24 relative rounded-md"
            value={value}
            onChange={(e) => {
              value?.length <= 3 ? setValue(e.target.value) : 1;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") pushVal();
            }}
          />
          <Button variant="outline" className="self-center" onClick={pushVal}>
            Push
          </Button>
          <Button
            variant="outline"
            className="self-center w-full"
            onClick={popVal}
          >
            Pop
          </Button>
        </div>
      </div>
      <div
        id="stackContainer"
        className="min-h-[10rem] bg-card border border-border border-t-background shadow w-40 p-2 flex flex-col justify-end gap-2 my-10 rounded-md"
      ></div>
    </div>
  );
}
