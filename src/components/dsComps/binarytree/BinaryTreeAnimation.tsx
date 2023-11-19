"use client";

import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";
import { nodeActivator, nodeSelector } from "./handler-library";
import BinaryTreeStructure, { INodeVals } from "@/components/BinaryTree";

interface IBinaryTreeAnimation {}

const BinaryTreeAnimation: FC<IBinaryTreeAnimation> = () => {
  // prettier-ignore
  const [nodeVals, setNodeVals] = useState<INodeVals>({ value: 1, nodeL: { value: 2, nodeL: { value: 3, nodeL: { value: 4 }, nodeR: {value:13}  }, nodeR: { value: 6  }, }, nodeR: { value: 9, nodeL: { value: 10, nodeR: { value: 12 } }, }, });
  const [preOrder, setPreOrder] = useState<number[]>([]);
  const [inOrder, setInOrder] = useState<number[]>([]);
  const [postOrder, setPostOrder] = useState<number[]>([]);
  const [running, setRunning] = useState<boolean>(false);
  let nodes = { ...nodeVals };
  //========================== Pre Order Handler ==============================
  let preOrderTemp: number[] = [];
  let inOrderTemp: number[] = [];
  let postOrderTemp: number[] = [];
  const preOrderSelector = async (
    path: Array<"l" | "r" | "root">,
    initialNode?: INodeVals,
  ) => {
    await nodeSelector(nodes, path, preOrderTemp, setNodeVals, setPreOrder);

    if (initialNode?.nodeL) {
      path.push("l");
      await preOrderSelector(path, initialNode?.nodeL);
    }
    if (initialNode?.nodeR) {
      path.push("r");
      await preOrderSelector(path, initialNode?.nodeR);
    }
    path.pop();
  };
  const preOrderHandler = async () => {
    reset(nodes);
    setRunning(true);
    await preOrderSelector(["root"], { ...nodeVals });
    setRunning(false);
  };
  //===========================================================================
  //=========================== In-Order Handler =============================
  const inOrderSelector = async (
    path: Array<"l" | "r" | "root">,
    initialNode?: INodeVals,
  ) => {
    if (initialNode?.nodeL) {
      path.push("l");
      await inOrderSelector(path, initialNode?.nodeL);
    }
    await nodeSelector(nodes, path, inOrderTemp, setNodeVals, setInOrder);
    if (initialNode?.nodeR) {
      path.push("r");
      await inOrderSelector(path, initialNode?.nodeR);
    }
    path.pop();
  };
  const inOrderHandler = async () => {
    reset(nodes);
    setRunning(true);
    await inOrderSelector(["root"], { ...nodeVals });
    setRunning(false);
  };
  //===========================================================================
  //=========================== Post-Order Handler =============================
  const postOrderSelector = async (
    path: Array<"l" | "r" | "root">,
    initialNode?: INodeVals,
  ) => {
    if (initialNode?.nodeL) {
      path.push("l");
      await postOrderSelector(path, initialNode?.nodeL);
    }
    if (initialNode?.nodeR) {
      path.push("r");
      await postOrderSelector(path, initialNode?.nodeR);
    }
    await nodeSelector(nodes, path, postOrderTemp, setNodeVals, setPostOrder);
    path.pop();
  };
  const postOrderHandler = async () => {
    setRunning(true);
    reset(nodes);
    await postOrderSelector(["root"], { ...nodeVals });
    setRunning(false);
  };
  //===========================================================================
  const reset = async (nodes: INodeVals) => {
    nodes.isSelected = false;
    if (nodes.nodeL) reset(nodes.nodeL);
    if (nodes.nodeR) reset(nodes.nodeR);
  };
  return (
    <>
      <div className="h-96 md:w-[72vw] overflow-scroll border border-border flex flex-col items-start">
        <div className="border-b border-border p-1 sticky top-0 w-full bg-background z-20">
          <div className="flex gap-2 items-center">
            <p className="w-24">Pre Order:</p>
            <div className="flex items-center w-56 justify-center gap-2 h-8">
              {preOrder?.map((num, index) => (
                <span key={"preOrderBox-" + index}>{num}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="w-24">In Order</p>
            <div className="flex items-center w-56 justify-center gap-2 h-8">
              {inOrder?.map((num, index) => (
                <span key={"preOrderBox-" + index}>{num}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="w-24">Post Order</p>
            <div className="flex items-center w-56 justify-center gap-2 h-8">
              {postOrder?.map((num, index) => (
                <span key={"preOrderBox-" + index}>{num}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-full scale-80 md:scale-100">
          <BinaryTreeStructure nodeVals={nodeVals} />
          {/* <Node nodeVals={nodeVals} /> */}
        </div>
      </div>
      <div className="my-3 flex gap-3 flex-wrap">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="w-32"
            onClick={preOrderHandler}
            disabled={running}
          >
            Pre-Order
          </Button>
        </div>
        <Button
          variant="secondary"
          className="w-32"
          disabled={running}
          onClick={inOrderHandler}
        >
          In-Order
        </Button>
        <Button
          variant="destructive"
          className="w-32"
          disabled={running}
          onClick={postOrderHandler}
        >
          Post-Order
        </Button>
      </div>
    </>
  );
};

export default BinaryTreeAnimation;
