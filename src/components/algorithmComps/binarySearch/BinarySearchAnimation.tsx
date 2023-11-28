"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MoveDown, MoveUp } from "lucide-react";
import React, { useState } from "react";
import { IArray, binarySearch } from "./handler-library";

const BinarySearchAnimation = () => {
  const [array, setArray] = useState<IArray[]>([]);
  const [input, setInput] = useState("");
  const [initialState, setInitialState] = useState<0 | 1 | 2 | 3>(0);
  const [playing, setPlaying] = useState(false);

  const insertElem = async () => {
    let inpVal: number | string = input;
    if (inpVal.trim() === "") return;
    inpVal = Number(inpVal);
    let tempArr = [...array];
    let len = tempArr.length;
    if (len === 0) tempArr.push({ value: inpVal });
    else {
      for (let i = 0; i <= len; i++) {
        if (i === len || array[i].value > inpVal) {
          const right = tempArr.splice(i, len);
          tempArr = [...tempArr, { value: inpVal }, ...right];
          break;
        }
      }
    }
    setArray(tempArr);
    setInput("");
  };
  const binarySearchHandler = async () => {
    let key: number | string = input;
    if (key.trim() === "") return;
    setPlaying(true);
    key = Number(key);
    const cpyArr = [...array];
    await binarySearch(key, cpyArr, setArray, setInitialState);
    setInput("");
    setPlaying(false);
  };

  return (
    <>
      <div className="border border-border mt-6 p-1 min-h-[15rem]">
        <div className="mb-4 flex gap-2">
          <p
            className={cn(
              "w-32 rounded-2xl px-2",
              initialState === 1 && "bg-success/50 shadow",
            )}
          >
            value {"<"} key
          </p>
          <p
            className={cn(
              "w-32 rounded-2xl px-2",
              initialState === 2 && "bg-success/50 shadow",
            )}
          >
            value {">"} key
          </p>
          <p
            className={cn(
              "w-32 rounded-2xl px-2",
              initialState === 3 && "bg-success/50 shadow",
            )}
          >
            value {"=="} key
          </p>
        </div>
        <div className="flex items-center text-xl">
          <ul className="flex">
            {array.map((item, i) => (
              <li className="flex flex-col items-center" key={"array-" + i}>
                <div className="mt-1 h-6">
                  <MoveDown
                    className={cn(item.isMid ? "text-success" : "hidden")}
                  />
                </div>
                <p
                  className={cn(
                    "px-2 border border-border m-[1px]",
                    (item.isLeft || item.isRight) &&
                      "bg-destructive/40 border-destructive shadow-destructive shadow-md",
                    item.isMid &&
                      "bg-success/40 border-success shadow-success shadow-md",
                  )}
                >
                  {item.value}
                </p>
                <div className="mt-1 h-6">
                  <MoveUp
                    className={cn(
                      item.isLeft || item.isRight
                        ? "text-destructive"
                        : "hidden",
                    )}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="mt-4 flex gap-2"> */}
        {/*   <h4>Note</h4> */}
        {/* </div> */}
      </div>
      <div className="my-5 flex gap-2 flex-wrap">
        <Input
          className="w-52"
          placeholder="Enter A Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") insertElem();
          }}
          disabled={playing}
        />
        <Button variant={"outline"} onClick={insertElem} disabled={playing}>
          Insert
        </Button>
        <Button
          variant={"secondary"}
          className="bg-green-900 hover:bg-green-800"
          onClick={binarySearchHandler}
          disabled={playing}
        >
          Binary Search
        </Button>
      </div>
    </>
  );
};

export default BinarySearchAnimation;
