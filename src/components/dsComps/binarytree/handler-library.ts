import { Dispatch, SetStateAction } from "react";

interface INodeVals {
  value: number;
  isActive?: boolean;
  isSelected?: boolean;
  nodeL?: INodeVals;
  nodeR?: INodeVals;
}

export const nodeActivator = (
  path: Array<"l" | "r" | "root">,
  node: INodeVals,
  tempContainer: number[],
  setNodeVals: Dispatch<SetStateAction<INodeVals>>,
  level = 0,
) => {
  if (path.length === 1) {
    if (node.isActive) {
      node.isSelected = true;
      node.isActive = false;
      tempContainer.push(node.value);
      // setPreOrder(preOrderTemp);
    } else node.isActive = true;
  }
  path.splice(0, 1);
  if (node.nodeL && path[0] === "l")
    nodeActivator(path, node.nodeL, tempContainer, setNodeVals, level + 1);
  else if (node.nodeR && path[0] === "r")
    nodeActivator(path, node.nodeR, tempContainer, setNodeVals, level + 1);

  if (level === 0) setNodeVals({ ...node });
};

export const nodeSelector = (
  nodes: INodeVals,
  path: Array<"l" | "r" | "root">,
  tempContainer: number[],
  setNodeVals: Dispatch<SetStateAction<INodeVals>>,
  setOrder: Dispatch<SetStateAction<number[]>>,
) => {
  return new Promise((resolve) => {
    nodeActivator([...path], nodes, tempContainer, setNodeVals);
    let step = 1;
    let steppingInt = setInterval(() => {
      switch (step) {
        case 1:
          nodeActivator([...path], nodes, tempContainer, setNodeVals);
          setOrder(tempContainer);
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
