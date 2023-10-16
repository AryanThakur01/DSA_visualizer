"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  CircleIcon,
  CornerDownLeftIcon,
  CornerDownRightIcon,
  MoveRight,
} from "lucide-react";
import { FC, useState } from "react";

interface SinglyLinearLL {}

const LinearLLAnimation: FC<SinglyLinearLL> = () => {
  // Controllers
  const [showTemp, setShowTemp] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const [popping, setPopping] = useState(false);
  const [dequing, setDequing] = useState(false);

  const [selectedBlock, setSelectedBlock] = useState<number | null>(); // temp
  const [value, setValue] = useState<string>(""); // Input
  const [llElems, setLLElems] = useState<string[]>(["1", "2", "3", "4", "5"]); // Update LL
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
    setShowAddress(false);
    setAnimating(true);

    let step = 1;
    let selectorInt = setInterval(() => {
      switch (step) {
        case 1:
          setSelectedBlock(llElems.length - 1);
          break;
        case 2:
          setPtrTail(true);
          break;
        case 3:
          setLLElems([...llElems, value]);
          setSelectedBlock(null);
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
      <div className="my-3">
        <div className="w-fit grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex gap-1">
            <Input
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
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
      <div className="overflow-x-scroll md:w-[65vw] border border-border p-2 py-8">
        <div className="flex gap-3 text-center w-fit">
          <div className="relative bottom-5">
            <h3>HEAD</h3>
            {ptrHead ? (
              <ArrowDown className="scale-105 text-border relative left-4 stroke-primary" />
            ) : (
              <CornerDownRightIcon
                className={`scale-105 text-border relative left-8  ${
                  popping
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
              className={`p-2 items-center flex text-success border ${
                selectedBlock ? "border-destructive" : "border-transparent"
              }`}
            >
              NULL
            </div>
          ) : (
            <>
              {llElems.map((val: string, index: number) => (
                <div
                  key={`linearLLElem-${index}`}
                  className={`w-fit p-1 border flex ${
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
                    {!ptrTail &&
                    ((dequing && index === llElems.length - 2) ||
                      index === llElems.length - 1 ||
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
          <div className="relative bottom-5">
            <h3>TAIL</h3>
            {ptrTail ? (
              <ArrowDown className="scale-105 text-border relative left-4 stroke-primary" />
            ) : (
              <CornerDownLeftIcon
                className={`scale-105 text-border relative right-2 ${
                  dequing
                    ? llElems.length === 1
                      ? "stroke-success"
                      : "stroke-destructive"
                    : ""
                }`}
              />
            )}
          </div>
        </div>
        <div
          className={`border w-fit p-1 flex my-3 ${
            ptrHead || ptrTail ? "border-primary" : "border-transparent"
          } ${showTemp ? "" : "invisible"}`}
        >
          <div className="rounded-none border border-border p-1 min-w-[3rem] text-center">
            {value.trim() ? value : "-"}
          </div>
          <div className="rounded-none border border-border p-1 w-fit">
            {showAddress ? (
              <CircleIcon className="fill-destructive stroke-none" />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LinearLLAnimation;
