"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { CornerDownLeftIcon, CornerDownRightIcon } from "lucide-react";
import { useState } from "react";

type Props = {};

export default function LinkedListAnimation({}: Props) {
  const [disabler, setDisabler] = useState<string>("");
  const insertAtFirst = () => {
    // Check for the insert value, and if nothing found return
    const val: HTMLInputElement | null = document.getElementById(
      "insertVal",
    ) as HTMLInputElement;
    const data: string | undefined = val?.value.trim();
    if (!data) return;

    val.value = "";
    setDisabler("insertFirst");

    const llh: HTMLElement | null = document.getElementById("linearLLH");
    if (!llh) return;

    const nodeContainer: HTMLElement = document.createElement("div");
    const nodeData: HTMLElement = document.createElement("p");
    const nodeNext: HTMLElement = document.createElement("div");

    nodeNext.innerHTML =
      llh.nextElementSibling?.innerHTML === "NULL"
        ? '<svg class="h-6 w-10 fill-border relative top-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.101 459.101"><g><polygon points="244.551,238.037 244.551,27.05 214.551,27.05 214.551,238.037 0,238.037 0,268.037 459.101,268.037 459.101,238.037"></polygon><rect x="49.551" y="320.043" width="360" height="30"></rect><rect x="94.551" y="402.05" width="270" height="30"></rect></g></svg>'
        : '<svg class="h-6 w-6 text-border relative left-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>';

    nodeContainer.className = "p-2 flex animate-stack-insert";
    nodeData.className = "border border-border min-w-[3rem] px-2";
    nodeData.innerHTML = data;
    nodeNext.className =
      "border border-border w-8 border-l-transparent flex justify-center items-center";

    nodeContainer.appendChild(nodeData);
    nodeContainer.appendChild(nodeNext);

    if (llh.nextElementSibling) {
      llh.before(nodeContainer);
    }

    let choice: number = 0;
    const interval = setInterval(() => {
      switch (choice) {
        case 0:
          llh.lastElementChild?.classList.toggle("text-destructive");
          llh.nextElementSibling?.classList.add("border-destructive", "border");
          break;
        case 1:
          nodeNext.firstElementChild?.classList.toggle("text-destructive");
          llh?.lastElementChild?.classList.toggle("text-destructive");
          break;
        case 2:
          if (
            llh.nextElementSibling &&
            llh.nextElementSibling.innerHTML === "NULL"
          ) {
            llh.nextElementSibling.remove();
          }
          llh.nextElementSibling?.classList.remove(
            "border-destructive",
            "border",
          );
          llh && nodeContainer.before(llh);
          nodeNext.firstElementChild?.classList.toggle("text-destructive");
          clearInterval(interval);
          setDisabler("");
      }
      console.log("hello");
      choice++;
    }, 1000);
  };
  const insertAtLast = () => {};
  return (
    <>
      <div className="my-3">
        <div className="flex gap-2">
          <input
            id="insertVal"
            type="text"
            className="outline-none px-2 w-16 h-10 relative rounded-md"
            onKeyDown={(e) => {
              if (e.key === "Enter") insertAtFirst();
            }}
            disabled={disabler === "insertFirst"}
          />
          <Button
            variant="outline"
            className="self-center"
            id="insertFirst"
            onClick={() => insertAtFirst()}
            disabled={disabler === "insertFirst"}
          >
            Insert At First
          </Button>
        </div>
      </div>
      <div className="overflow-x-scroll w-full border border-border py-5">
        <div className="flex gap-1 text-center p-2">
          <div className="relative bottom-5" id="linearLLH">
            <h3>HEAD</h3>
            <CornerDownRightIcon className="h-6 w-6 text-border relative left-8" />
          </div>
          <div className="p-2 flex text-destructive">NULL</div>
          <div className="relative bottom-5" id="LLT">
            <h3>TAIL</h3>
            <CornerDownLeftIcon className="h-6 w-6 text-border relative right-2" />
          </div>
        </div>
      </div>
      <article className="p-1 my-4">
        <h3>
          <b>CHECK IF THE HEAD IS POINTING TO THE NULL</b>
        </h3>
        <ul className="list-disc p-4">
          <li>
            Head pointing to the null means insert the element such that its
            next is pointing to the null character
          </li>
          <li>Also point the tail to the node</li>
        </ul>
        <h3>
          <b>IF HEAD NOT POINTING TO THE NULL</b>
        </h3>
        <ul className="list-disc p-4">
          <li>First create a node and insert the value</li>
          <li>Then point the next to the head</li>
          <li>Once pointing to the head</li>
          <li>point the head to the current element</li>
        </ul>
      </article>
    </>
  );
}
