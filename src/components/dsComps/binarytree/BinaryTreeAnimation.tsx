"use client";

import { FC, ReactNode } from "react";

interface IBinaryTree {}

const BinaryTreeAnimation: FC<IBinaryTree> = () => {
  const nodeVals = {
    value: 1,
    nodeA: {
      value: 5,
      nodeA: { value: 2 },
      nodeB: { value: 3 },
    },
    nodeB: {
      value: 5,
      nodeB: { value: 5 },
    },
  };
  return (
    <div className="h-72 w-[75vw] overflow-scroll border border-border flex flex-col items-center p-3">
      <Node nodeVals={nodeVals} />
    </div>
  );
};

interface INodeVals {
  value: number;
  nodeA?: INodeVals;
  nodeB?: INodeVals;
}
interface INode {
  nodeVals: INodeVals;
}
// const Node: FC<INode> = ({ value, child1, child2 }) => {
const Node: FC<INode> = ({ nodeVals }) => {
  return (
    <>
      <div className="bg-opacity-100 py-[-3rem] p-2 flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <div className="h-20 border w-1 relative top-10" />
          <hr className="w-[calc(25%-2rem)]" />
          <p className="border text-center w-20 self-center">
            {nodeVals.value || " "}
          </p>
          <hr className="w-[calc(25%-2rem)]" />
          <div className="h-20 border w-1 relative top-10" />
        </div>
        <div className="flex justify-center">
          {nodeVals.nodeA ? (
            <Node nodeVals={nodeVals.nodeA} />
          ) : (
            <div className="w-20" />
          )}
          {nodeVals.nodeB && <Node nodeVals={nodeVals.nodeB} />}
        </div>
      </div>
    </>
  );
};

export default BinaryTreeAnimation;
