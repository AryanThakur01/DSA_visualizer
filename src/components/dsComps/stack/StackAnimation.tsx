"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CornerRightDown, MoveRight } from "lucide-react";
import Image from "next/image";
import { FC, useRef, useState } from "react";

interface IStackAnimation {}

const StackAnimation: FC<IStackAnimation> = () => {
  // ---------------------------- States and Refs
  const [value, setValue] = useState<string>("");
  const [top, setTop] = useState<number>(-1);
  const [stack, setStack] = useState<string[]>([]);
  const [peek, setPeek] = useState<boolean>(false);
  const inputBlock = useRef<HTMLInputElement>(null);

  // ---------------------------- Functions
  const peeker = () => {
    setPeek(!peek);
  };
  const pushVal = () => {
    inputBlock.current?.focus();
    if (value.trim() === "") {
      setValue("");
      return;
    }
    setStack([...stack, value]);
    setTop(top + 1);
    setValue("");
  };
  const popVal = () => {
    if (!stack.length) return;
    let newStack = stack;
    newStack.splice(stack.length - 1, 1); // splice RETURNS he removed value and changes original value to after removal
    setStack([...newStack]);
    setTop(top - 1);
  };

  // ---------------------------- JSX starts here
  return (
    <div className="w-fit flex flex-col items-center my-9 gap-4">
      <div className="w-fit flex flex-col gap-2">
        <div className="flex gap-1">
          <Input
            ref={inputBlock}
            id="stackInput"
            placeholder="Enter Value"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") pushVal();
            }}
          />
        </div>
        <div className="flex gap-1">
          <Button variant="outline" onClick={pushVal}>
            Push
          </Button>
          <Button variant="destructive" onClick={popVal}>
            Pop
          </Button>
          <Button variant="outline" className="w-16" onClick={() => peeker()}>
            {peek ? (
              <Image
                src={"/eyes.gif"}
                alt="Peek"
                width={30}
                height={0}
                unoptimized
              />
            ) : (
              "Peek"
            )}
          </Button>
          <p
            className={cn(
              buttonVariants({ variant: "outline" }),
              "pointer-events-none",
              stack.length
                ? "text-destructive border-destructive"
                : "border-green-500 text-green-500",
            )}
          >
            Empty?
          </p>
        </div>
      </div>
      <div className="my-10 min-h-[10rem] bg-card border border-border border-t-background shadow w-40 p-2 flex flex-col-reverse gap-2 rounded-md">
        {stack.map((elem: string, index: number) => (
          <p
            key={`stack-Elem-${index}`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "pointer-events-none animate-stack-insert",
              peek && index === top ? "border-green-500 text-green-500" : "",
            )}
          >
            {elem}
          </p>
        ))}
        <div className="flex text-muted-foreground relative top-10 right-16">
          <p>top {top}</p>
          <MoveRight />
        </div>
        {/* <div className="flex text-muted-foreground"> */}
        {/*   <p>top {top}</p> */}
        {/*   <CornerRightDown className="relative top-5 right-4" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default StackAnimation;
