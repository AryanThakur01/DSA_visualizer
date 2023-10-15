"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, MouseEvent, useState } from "react";

interface IStackAnimation {}

const StackAnimation: FC<IStackAnimation> = () => {
  const [value, setValue] = useState<string>("");
  const [top, setTop] = useState<number>(-1);
  const pushVal = () => {
    let val: string | number = value.trim();
    if (val === "") return;
    let stack = document.getElementById("stackContainer");
    let block = document.createElement("div");
    block.innerHTML = value;
    block.className =
      "border border-border rounded-md text-muted-foreground h-10 flex items-center justify-center animate-stack-insert";
    // stack?.prepend(block);
    stack?.firstElementChild?.after(block);
    setValue("");
    setTop(top + 1);
  };
  const popVal = () => {
    let stack = document.getElementById("stackContainer");
    if (!stack?.firstElementChild?.nextElementSibling) return;
    stack?.removeChild(stack.firstElementChild.nextElementSibling);
    setTop(top - 1);
  };
  const peek = (e: MouseEvent<HTMLButtonElement, Event>) => {
    let stack = document.getElementById("stackContainer");
    let topElement = stack?.firstElementChild?.nextElementSibling;
    if (!topElement) return;
    let selfTarget: HTMLButtonElement = e.target as any;
    selfTarget.disabled = true;
    selfTarget.innerHTML = topElement.innerHTML;
    topElement.classList.toggle("border-destructive");
    setTimeout(() => {
      if (!topElement) return;
      topElement.classList.toggle("border-destructive");
      selfTarget.innerHTML = "Peek";
      selfTarget.disabled = false;
    }, 1000);
  };
  const isEmpty = (e: MouseEvent<HTMLButtonElement, Event>) => {
    let selectedArea: HTMLButtonElement = e.target as HTMLButtonElement;
    selectedArea.disabled = true;
    if (top === -1) selectedArea.innerHTML = "YES";
    else selectedArea.innerHTML = "NO";
    setTimeout(() => {
      selectedArea.innerHTML = "Is Empty?";
      selectedArea.disabled = false;
    }, 1000);
  };
  return (
    <div className="w-fit flex flex-col items-center my-9 gap-4">
      <div className="w-fit flex flex-col gap-2">
        <div className="flex gap-1">
          <Input
            id="stackInput"
            placeholder="Enter Value"
            type="text"
            // className="outline-none px-2 w-24 relative rounded-md"
            value={value}
            onChange={(e) => {
              value?.length <= 3 ? setValue(e.target.value) : 1;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") pushVal();
            }}
          />
        </div>
        <div className="flex gap-1">
          <Button variant="outline" className="self-center" onClick={pushVal}>
            Push
          </Button>
          <Button
            variant="destructive"
            className="self-center w-20"
            onClick={popVal}
          >
            Pop
          </Button>
          <Button
            variant="outline"
            className="self-center w-16"
            onClick={(e) => peek(e)}
          >
            Peek
          </Button>
          <Button
            variant="outline"
            className="self-center w-28"
            onClick={(e) => isEmpty(e)}
          >
            Is Empty?
          </Button>
        </div>
      </div>
      <div
        id="stackContainer"
        className="min-h-[10rem] bg-card border border-border border-t-background shadow w-40 p-2 flex flex-col justify-end gap-2 rounded-md"
      >
        <div className="flex text-muted-foreground">
          <p>top {top}</p>
          <svg
            className="relative top-5 right-4"
            fill="hsl(var(--muted-foreground))"
            height="20px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330.001 330.001"
            transform="rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_25_"
                d="M325.607,79.395l-75-75c-4.29-4.291-10.742-5.574-16.347-3.252c-5.605,2.322-9.26,7.792-9.26,13.858v60h-210 c-8.284,0-15,6.716-15,15v225c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-210h195v60c0,6.067,3.655,11.537,9.26,13.858 c1.856,0.769,3.805,1.142,5.737,1.142c3.904,0,7.741-1.524,10.61-4.394l75-75C331.465,94.749,331.465,85.252,325.607,79.395z M255.001,128.788V51.214l38.787,38.787L255.001,128.788z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default StackAnimation;
