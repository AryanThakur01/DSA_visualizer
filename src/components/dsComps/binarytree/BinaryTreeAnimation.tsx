"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

interface INodeVals {
  value: number;
  isActive?: boolean;
  isSelected?: boolean;
  nodeL?: INodeVals;
  nodeR?: INodeVals;
}
interface IBinaryTree {}

const BinaryTreeAnimation: FC<IBinaryTree> = () => {
  // prettier-ignore
  const [nodeVals, setNodeVals] = useState<INodeVals>({ value: 1, nodeL: { value: 2, nodeL: { value: 3, nodeL: { value: 4 }  }, nodeR: { value: 6, nodeL: { value: 7 }  }, }, nodeR: { value: 9, nodeL: { value: 10, nodeR: { value: 12 } }, }, });
  const [preOrder, setPreOrder] = useState<number[]>([]);
  const [inOrder, setInOrder] = useState<number[]>([]);
  const [postOrder, setPostOrder] = useState<number[]>([]);
  let nodes = { ...nodeVals };
  let preOrderTemp: number[] = [];
  const nodeActivator = (
    path: Array<"l" | "r" | "root">,
    node: INodeVals,
    level = 0,
  ) => {
    if (path.length === 1) {
      if (node.isActive) {
        node.isSelected = true;
        node.isActive = false;
        preOrderTemp.push(node.value);
        setPreOrder(preOrderTemp);
      } else node.isActive = true;
    }
    path.splice(0, 1);
    if (node.nodeL && path[0] === "l")
      nodeActivator(path, node.nodeL, level + 1);
    else if (node.nodeR && path[0] === "r")
      nodeActivator(path, node.nodeR, level + 1);
    if (level === 0) setNodeVals({ ...node });
  };
  const nodeSelector = (nodes: INodeVals, path: Array<"l" | "r" | "root">) => {
    return new Promise((resolve) => {
      nodeActivator([...path], nodes);
      let step = 1;
      let steppingInt = setInterval(() => {
        switch (step) {
          case 1:
            nodeActivator([...path], nodes);
            break;
          case 2:
            clearInterval(steppingInt);
            resolve("Success");
            break;
        }
        step++;
      }, 1000);
    });
  };
  const preOrderSelector = async (
    path: Array<"l" | "r" | "root">,
    initialNode?: INodeVals,
  ) => {
    await nodeSelector(nodes, path);

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
          <Node nodeVals={nodeVals} />
        </div>
      </div>
      <div className="my-3 flex gap-3 flex-wrap">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="w-32"
            onClick={() => preOrderSelector(["root"], { ...nodeVals })}
          >
            Pre-Order
          </Button>
        </div>
        <Button variant="secondary" className="w-32">
          In-Order
        </Button>
        <Button variant="destructive" className="w-32">
          Post-Order
        </Button>
      </div>
    </>
  );
};

interface INode {
  nodeVals: INodeVals;
}
const Node: FC<INode> = ({ nodeVals }) => {
  return (
    <>
      <div className="bg-opacity-100 py-[-3rem] flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <div
            className={cn(
              "h-20 w-[1px] relative top-10",
              nodeVals.nodeL && "bg-foreground",
            )}
          />
          <hr
            className={cn(
              "w-[calc(25%-1rem)] border-transparent",
              nodeVals?.nodeL && "border-foreground",
            )}
          />
          <p
            className={cn(
              "border border-foreground text-center w-8 self-center rounded",
              nodeVals.isActive ? "bg-destructive" : "",
              nodeVals.isSelected ? "border-success text-success" : "",
            )}
          >
            {nodeVals.value || " "}
          </p>
          <hr
            className={cn(
              "w-[calc(25%-1rem)] border-transparent",
              nodeVals?.nodeR && "border-foreground",
            )}
          />
          <div
            className={cn(
              "h-20 w-[1px] relative top-10",
              nodeVals.nodeR && "bg-foreground",
            )}
          />
        </div>
        <div className="grid grid-cols-2 justify-center">
          {nodeVals.nodeL ? (
            <Node nodeVals={nodeVals.nodeL} />
          ) : (
            <div className="w-20" />
          )}
          {nodeVals.nodeR ? (
            <Node nodeVals={nodeVals.nodeR} />
          ) : (
            <div className="w-20" />
          )}
        </div>
      </div>
    </>
  );
};

export default BinaryTreeAnimation;
