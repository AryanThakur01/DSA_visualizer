"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  CircleIcon,
  CornerDownLeftIcon,
  CornerDownRightIcon,
  MoveDown,
  MoveRight,
} from "lucide-react";
import { FC, useState } from "react";

interface ICircularLLAnimation {}

const CircularLLAnimation: FC<ICircularLLAnimation> = () => {
  // Controllers
  const [showTemp, setShowTemp] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const [popping, setPopping] = useState(false);
  const [dequing, setDequing] = useState(false);

  const [selectedBlock, setSelectedBlock] = useState<number | null>(); // temp
  const [value, setValue] = useState<string>(""); // Input
  const [llElems, setLLElems] = useState<string[]>([]); // Update LL
  const [ptrHead, setPtrHead] = useState<boolean>(false); // Head Pointer
  const [ptrTail, setPtrTail] = useState<boolean>(false); // Tail Pointer
  const [showAddress, setShowAddress] = useState<boolean>(false); //next

  const enqueue = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }
    setAnimating(true);

    if (!value.trim()) {
      setValue("");
      return;
    }
    setShowTemp(true);
    setAnimating(true);

    let step = 1;
    let selectorInt = setInterval(() => {
      switch (step) {
        case 1:
          // setSelectedBlock(llElems.length - 1);
          setShowAddress(true);
          setPtrTail(true);
          break;
        case 2:
          setLLElems([...llElems, value]);
          setShowAddress(false);
          setAnimating(false);
          setShowTemp(false);
          setPtrTail(false);
          setValue("");
          clearInterval(selectorInt);
          break;
      }
      step++;
    }, 1000);
  };
  const dequeue = () => {
    if (!llElems.length) return;
    setAnimating(true);

    let step = 1;
    let selectorInt = setInterval(() => {
      switch (step) {
        case 1:
          setDequing(true);
          break;
        case 2:
          setPtrHead(false);
          setDequing(false);
          setLLElems(llElems.splice(0, llElems.length - 1));
          setAnimating(false);
          clearInterval(selectorInt);
          break;
      }
      step++;
    }, 1000);
  };
  const pop = () => {
    if (!llElems.length) return;
    setAnimating(true);

    let step = 1;
    let selectorInt = setInterval(() => {
      switch (step) {
        case 1:
          setPopping(true);
          break;
        case 2:
          setPtrHead(false);
          setPopping(false);
          setLLElems(llElems.splice(1));
          setAnimating(false);
          clearInterval(selectorInt);
          break;
      }
      step++;
    }, 1000);
  };
  const push = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }
    setShowTemp(true);
    setAnimating(true);

    let step = 1;
    let selectorInt = setInterval(() => {
      switch (step) {
        case 1:
          setSelectedBlock(0);
          break;
        case 2:
          setShowAddress(true);
          break;
        case 3:
          setPtrHead(true);
          break;
        case 4:
          setPtrHead(false);
          setLLElems([value, ...llElems]);

          setValue("");
          setSelectedBlock(null);
          setAnimating(false);
          setShowTemp(false);
          setShowAddress(false);
          clearInterval(selectorInt);
          break;
      }
      step++;
    }, 1000);
  };
  return (
    <>
      <div className="overflow-x-scroll md:w-[65vw] border border-border p-2 pt-20 mt-5">
        <div className="w-fit">
          <div className="flex gap-3 text-center w-fit">
            <div className="relative bottom-5">
              <h3>HEAD</h3>
              {ptrHead || (ptrTail && !llElems.length) ? (
                <MoveDown className="scale-105 text-border relative left-4 stroke-primary" />
              ) : (
                <CornerDownRightIcon
                  className={`scale-105 text-border relative left-8  ${
                    popping || (dequing && llElems.length === 1)
                      ? llElems.length !== 1
                        ? "stroke-destructive"
                        : "stroke-success"
                      : ""
                  }`}
                />
              )}
            </div>
            {!llElems.length ? (
              <div
                className={`p-2 items-center flex text-success border-2 rounded ${
                  selectedBlock === 0
                    ? "border-destructive"
                    : "border-transparent"
                }`}
              >
                NULL
              </div>
            ) : (
              <>
                {llElems.map((val: string, index: number) => (
                  <div
                    key={`linearLLElem-${index}`}
                    className={`top-[40%] left-[50%] w-fit p-1 rounded border-2 flex ${
                      selectedBlock === index ||
                      (popping && index === 1) ||
                      (dequing && index === llElems.length - 2)
                        ? "border-destructive"
                        : "border-transparent"
                    }`}
                  >
                    <div className="rounded-none border border-border min-w-[3rem] flex justify-center items-center px-1">
                      {val}
                    </div>
                    <div
                      className={`rounded-none border border-border min-w-[2rem] flex justify-center items-center `}
                    >
                      {index === llElems.length - 1 ? (
                        <></>
                      ) : !ptrTail &&
                        ((dequing && index === llElems.length - 2) ||
                          (popping && index === 0)) ? (
                        <CircleIcon className="stroke-none fill-success" />
                      ) : (
                        <MoveRight
                          className={`scale-125 stroke-1 relative left-5 text-border ${
                            ptrTail &&
                            index === llElems.length - 1 &&
                            "text-primary"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div
            className={cn(
              `border-2 rounded w-fit p-1 flex my-3`,
              ptrHead || ptrTail ? "border-primary" : "border-transparent",
              showTemp ? "" : "invisible",
              animating ? "animate-movein-right" : "",
            )}
          >
            <div className="rounded-none border border-border p-1 min-w-[3rem] text-center">
              {value.trim() ? value : "-"}
            </div>
            <div
              className={cn(
                "rounded-none border border-border overflow-hidden flex justify-center items-center",
                animating && showAddress ? "animate-expand-right w-[2rem]" : "",
              )}
            >
              {showAddress ? (
                ptrTail ? (
                  <CircleIcon className="fill-success stroke-none" />
                ) : (
                  <CircleIcon className="fill-destructive stroke-none" />
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="w-fit grid md:grid-cols-3 grid-cols-1 gap-2">
          <Input
            className="w-full"
            disabled={animating}
            placeholder="Enter Value"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") push();
            }}
          />
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button variant="outline" onClick={push} disabled={animating}>
              Push
            </Button>
            <Button variant="destructive" disabled={animating} onClick={pop}>
              Pop
            </Button>
            <Button variant="outline" disabled={animating} onClick={enqueue}>
              Enqueue
            </Button>
            <Button
              variant="destructive"
              disabled={animating}
              onClick={dequeue}
            >
              Dequeue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularLLAnimation;
