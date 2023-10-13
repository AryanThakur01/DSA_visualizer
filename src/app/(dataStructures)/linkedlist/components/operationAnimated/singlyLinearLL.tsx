import { Dispatch, SetStateAction } from "react";

export const insertAtTop = (
  setDisabler: Dispatch<SetStateAction<"insertFirst" | "insertEnd" | "">>,
) => {
  // Check for the insert value, and if nothing found return
  const val: HTMLInputElement | null = document.getElementById(
    "insertVal",
  ) as HTMLInputElement;
  const data: string | undefined = val?.value.trim();
  if (!data) return;

  val.value = "";

  const llh: HTMLElement | null = document.getElementById("linearLLH");
  if (!llh) return;

  setDisabler("insertFirst");
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
        setDisabler("");
        clearInterval(interval);
    }
    console.log("hello");
    choice++;
  }, 1000);
};

export const insertAtEnd = (
  setDisabler: Dispatch<SetStateAction<"insertFirst" | "insertEnd" | "">>,
) => {
  const val: HTMLInputElement | null = document.getElementById(
    "insertVal",
  ) as HTMLInputElement;
  const data: string | undefined = val?.value.trim();
  if (!data) return;

  val.value = "";

  const llt: HTMLElement | null = document.getElementById("linearLLT");
  if (!llt) return;
  setDisabler("insertEnd");

  // create the node
  const nodeContainer: HTMLElement = document.createElement("div");
  const nodeData: HTMLElement = document.createElement("p");
  const nodeNext: HTMLElement = document.createElement("div");
  nodeNext.innerHTML =
    '<svg class="h-6 w-10 fill-border relative top-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.101 459.101"><g><polygon points="244.551,238.037 244.551,27.05 214.551,27.05 214.551,238.037 0,238.037 0,268.037 459.101,268.037 459.101,238.037"></polygon><rect x="49.551" y="320.043" width="360" height="30"></rect><rect x="94.551" y="402.05" width="270" height="30"></rect></g></svg>';

  // node properties defining
  nodeContainer.className = "p-2 flex animate-stack-insert";
  nodeData.className = "border border-border min-w-[3rem] px-2";
  nodeData.innerHTML = data;
  nodeNext.className =
    "border border-border w-8 border-l-transparent flex justify-center items-center";

  nodeContainer.appendChild(nodeData);
  nodeContainer.appendChild(nodeNext);

  llt.after(nodeContainer);

  let choice: number = 0;
  const interval = setInterval(() => {
    switch (choice) {
      case 0:
        llt.nextElementSibling?.classList.add("border-destructive", "border");
        break;
      case 1:
        llt.lastElementChild?.classList.toggle("text-destructive");
        break;
      case 2:
        llt.lastElementChild?.classList.toggle("text-destructive");
        llt.nextElementSibling?.classList.remove(
          "border-destructive",
          "border",
        );
        if (llt.previousElementSibling?.innerHTML != "NULL") {
          if (!llt.previousElementSibling?.lastElementChild) return;
          llt.previousElementSibling.lastElementChild.innerHTML =
            '<svg class="h-6 w-6 text-border relative left-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>';
        } else {
          llt.previousElementSibling.remove();
          // llt.previousElementSibling.innerHTML = "";
          // llt.previousElementSibling.appendChild(nodeContainer);
        }
        nodeContainer.after(llt);
        setDisabler("");
        clearInterval(interval);
    }
    choice++;
  }, 1000);
};
