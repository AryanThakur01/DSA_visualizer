"use client";
import { Button } from "@/components/ui/button";
import { FC, useRef, useState } from "react";
import BinaryTreeStructure, { INodeVals } from "@/components/BinaryTree";
import {
  delRightMost,
  popMin,
  insertElem,
  percolatingUp,
  percolatingDown,
} from "./handler-library";
import { Input } from "@/components/ui/input";

interface IHeap {}

const MinHeapAnimation: FC<IHeap> = () => {
  // prettier-ignore
  const [nodeVals, setNodeVals] = useState<INodeVals>({value:-1});
  const [inputVal, setInputVal] = useState<string>("");
  const [playing, setPlaying] = useState<boolean>(false);
  const unfilledLevel = useRef(0);

  const insertionHandler = async () => {
    setPlaying(true);
    setInputVal(inputVal.trim());
    if (inputVal.trim() === "") return;
    let val: number = Number(inputVal);
    let nodes: INodeVals = { ...nodeVals };
    await insertElem(val, nodes, unfilledLevel);
    await percolatingUp(nodes, nodes, setNodeVals);
    setNodeVals(nodes);
    setPlaying(false);
    setInputVal("");
  };
  const deletionHandler = async () => {
    setPlaying(true);
    let nodes: INodeVals = { ...nodeVals };
    let deleted = await popMin(nodes, nodes, unfilledLevel, setNodeVals);
    if (!deleted)
      deleted = await delRightMost(nodes, nodes, setNodeVals, unfilledLevel);
    setNodeVals(nodes);
    await percolatingDown(nodes, nodes, setNodeVals);
    setPlaying(false);
  };

  return (
    <>
      <div className="h-96 md:w-[72vw] overflow-scroll border border-border flex flex-col items-center">
        <BinaryTreeStructure nodeVals={nodeVals} />
      </div>
      <div className="flex gap-3 flex-wrap my-3">
        <Input
          placeholder="Enter A Value To Push"
          className="max-w-[11rem]"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") insertionHandler();
          }}
          disabled={playing}
        />
        <Button
          variant="outline"
          className="border-green-500 border rounded text-green-500"
          onClick={() => insertionHandler()}
          disabled={playing}
        >
          Insert
        </Button>
        <Button
          variant="destructive"
          onClick={() => deletionHandler()}
          disabled={playing}
        >
          Pop
        </Button>
      </div>
    </>
  );
};

export default MinHeapAnimation;
