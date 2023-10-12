"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  CornerDownLeftIcon,
  CornerDownRightIcon,
  MoveRight,
} from "lucide-react";
import { MouseEvent, useEffect } from "react";

type Props = {};

export default function LinkedListAnimation({}: Props) {
  const insertAtFirst = () => {
    let val: HTMLInputElement = document.getElementById("insertVal") as any;
    val.disabled = true;
    let data = val?.value.trim();
    val.value = "";
    if (!data) return;

    let firstInsertButton: HTMLButtonElement = document.getElementById(
      "insertFirst",
    ) as any;
    firstInsertButton.disabled = true;
    let llh: HTMLElement | null = document.getElementById("linearLLH");
    let nodeContainer: HTMLElement = document.createElement("div");
    let nodeData: HTMLElement = document.createElement("p");
    let nodeNext: HTMLElement = document.createElement("div");
    nodeNext.innerHTML =
      '<svg class="h-6 w-6 text-border relative left-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>';

    nodeContainer.className = "p-2 flex animate-stack-insert";
    nodeData.className = "border border-border min-w-[3rem] px-2";
    nodeData.innerHTML = data;
    nodeNext.className =
      "border border-border w-8 border-l-transparent flex justify-center items-center";

    nodeContainer.appendChild(nodeData);
    nodeContainer.appendChild(nodeNext);
    llh?.before(nodeContainer);

    let choice: number = 0;
    let interval = setInterval(() => {
      switch (choice) {
        case 0:
          nodeNext.firstElementChild?.classList.toggle("text-destructive");
          llh?.lastElementChild?.classList.toggle("text-destructive");
          break;
        case 1:
          nodeNext.firstElementChild?.classList.toggle("text-destructive");
          llh?.lastElementChild?.classList.toggle("text-destructive");
          llh && nodeContainer.before(llh);
          firstInsertButton.disabled = false;
          val.disabled = false;
          clearInterval(interval);
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
          />
          <Button
            variant="outline"
            className="self-center"
            id="insertFirst"
            onClick={(e) => insertAtFirst()}
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
          <div className="p-2 flex">
            <p className="border border-border min-w-[3rem] px-2">121</p>
            <div className="border border-border w-8 border-l-transparent flex justify-center items-center">
              <svg
                className="h-6 w-10 fill-border relative top-5"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 459.101 459.101"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="XMLID_1468_">
                    <polygon
                      id="XMLID_1469_"
                      points="244.551,238.037 244.551,27.05 214.551,27.05 214.551,238.037 0,238.037 0,268.037 459.101,268.037 459.101,238.037 "
                    ></polygon>
                    <rect
                      id="XMLID_1470_"
                      x="49.551"
                      y="320.043"
                      width="360"
                      height="30"
                    ></rect>
                    <rect
                      id="XMLID_1471_"
                      x="94.551"
                      y="402.05"
                      width="270"
                      height="30"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {/* <div className="p-2 flex text-destructive">NULL</div> */}
          <div className="relative bottom-5">
            <h3>TAIL</h3>
            <CornerDownLeftIcon className="h-6 w-6 text-border relative right-2" />
          </div>
        </div>
      </div>
    </>
  );
}
