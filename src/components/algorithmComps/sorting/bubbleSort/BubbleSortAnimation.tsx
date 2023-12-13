"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IArray, bubbleSort, resetHandler } from "./handler-library";
import { Slider } from "@/components/ui/slider";

const BubbleSortAnimation = () => {
  const [array, setArray] = useState<IArray[]>([]);
  const [input, setInput] = useState("");
  const [initialState, setInitialState] = useState<0 | 1 | 2 | 3>(0);
  const [playing, setPlaying] = useState(false);
  const steps = [
    "",
    "Initial < Next, Move forward",
    "Intial > Next",
    "move initial value forward",
  ];
  const [max, setMax] = useState<number>(0);
  const [negativeMax, setNegativeMax] = useState<number>(0);
  const animSpeed = useRef(0.01);

  const insertElem = () => {
    let inpVal: number | string = input;
    if (inpVal.trim() === "") return;
    inpVal = Number(inpVal);
    if (!array.length || !max || inpVal > max) {
      setMax(inpVal);
    }
    if (inpVal < 0 && inpVal < negativeMax) {
      setNegativeMax(inpVal);
    }
    let tempArr = [...array];
    tempArr.push({ value: inpVal });
    setArray(tempArr);
    setInput("");
  };
  const SortingHandler = async () => {
    setPlaying(true);
    await bubbleSort([...array], setArray, setInitialState, animSpeed);
    setPlaying(false);
  };

  return (
    <>
      <div className="border border-border mt-6 p-1 min-h-[15rem]">
        <div className="mb-4 min-h-[4rem]">
          <p
            className={cn(
              "rounded-2xl px-2",
              initialState % 2 === 0 && "bg-success/50 shadow",
              initialState % 2 !== 0 && "bg-destructive/50 shadow",
            )}
          >
            {steps[initialState]}
          </p>
        </div>
        <div className="flex items-center text-xl">
          <ul className="flex h-40">
            {array.map((item, i) => (
              <li
                className="flex flex-col justify-end items-center p-1 gap-2"
                key={"array-" + i}
              >
                <div className="flex items-end h-1/2 w-full">
                  {item.value > 0 && (
                    <div
                      className="bg-primary h-full w-full rounded"
                      style={{
                        height: max ? (item.value / max) * 100 + "%" : 1 + "px",
                      }}
                    />
                  )}
                </div>
                <p
                  className={cn(
                    "px-2 border border-border m-[1px] rounded-full",
                    item.isActivated &&
                      "bg-destructive/40 border-destructive shadow-destructive shadow-md translate-y-2",
                    item.isSelected &&
                      "bg-success/40 border-success shadow-success shadow-md",
                  )}
                >
                  {item.value}
                </p>
                <div className="h-1/2 w-full">
                  {item.value < 0 && (
                    <div
                      className="bg-destructive h-full w-full rounded"
                      style={{
                        height: max
                          ? (item.value / negativeMax) * 100 + "%"
                          : 1 + "px",
                      }}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-4">
        <span>Speed</span>
        <Slider
          defaultValue={[animSpeed.current]}
          onValueChange={(values) => {
            animSpeed.current = values[0];
          }}
          max={0.4}
          min={0.01}
          step={0.01}
          className={cn("max-w-2xl")}
          disabled={playing}
        />
      </div>
      <div className="my-5 flex gap-2 flex-wrap justify-center">
        <Input
          type="number"
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
          onClick={SortingHandler}
          disabled={playing}
        >
          Sort
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            resetHandler([...array], setArray);
          }}
          disabled={playing}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default BubbleSortAnimation;
