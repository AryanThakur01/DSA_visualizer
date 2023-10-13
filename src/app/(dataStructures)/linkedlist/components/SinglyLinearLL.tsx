"use client";
import { Button } from "@/components/ui/button";
import { CornerDownLeftIcon, CornerDownRightIcon } from "lucide-react";
import { useState } from "react";
import { insertAtEnd, insertAtTop } from "./operationAnimated/singlyLinearLL";

type Props = {};

export default function SinglyLinearLL({}: Props) {
  const [disabler, setDisabler] = useState<"insertFirst" | "insertEnd" | "">(
    "",
  );
  return (
    <>
      <div className="my-3">
        <div className="flex gap-2">
          <input
            id="insertVal"
            type="text"
            className="outline-none px-2 w-16 h-10 relative rounded-md"
            onKeyDown={(e) => {
              if (e.key === "Enter") insertAtTop(setDisabler);
            }}
            disabled={disabler === "insertFirst"}
          />
          <Button
            variant="outline"
            className="self-center"
            id="insertFirst"
            onClick={() => insertAtTop(setDisabler)}
            disabled={disabler === "insertFirst"}
          >
            Insert At First
          </Button>
          <Button
            variant="secondary"
            className="self-center"
            id="insertFirst"
            onClick={() => insertAtEnd(setDisabler)}
            disabled={disabler === "insertEnd"}
          >
            Insert At End
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
          <div className="relative bottom-5" id="linearLLT">
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
