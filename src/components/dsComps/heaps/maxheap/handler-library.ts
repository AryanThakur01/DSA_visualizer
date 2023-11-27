import { INodeVals } from "@/components/BinaryTree";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

const insertElem = async (
  val: number,
  nodes: INodeVals | undefined,
  unfilledLevel: MutableRefObject<number>,
  curLevel: number = 0,
  right: number = 0,
): Promise<boolean> => {
  if (!nodes) return true;
  let isInserted = false;
  if (unfilledLevel.current === 0) {
    nodes.value = val;
    unfilledLevel.current = 1;
    return true;
  }
  if (nodes.nodeL) {
    isInserted = await insertElem(
      val,
      nodes.nodeL,
      unfilledLevel,
      curLevel + 1,
    );
    if (isInserted) return true;
  } else {
    if (curLevel === unfilledLevel.current - 1) {
      nodes.nodeL = { value: val };
      isInserted = true;
    }
  }
  if (!isInserted) {
    if (nodes.nodeR) {
      isInserted = await insertElem( val, nodes.nodeR, unfilledLevel, curLevel + 1, right + 1); // prettier-ignore
      if (isInserted) return true;
    } else {
      if (curLevel === unfilledLevel.current - 1) {
        nodes.nodeR = { value: val };
        isInserted = true;
        if (right === unfilledLevel.current - 1)
          unfilledLevel.current = unfilledLevel.current + 1;
      }
    }
  }
  return isInserted;
};

const swapAnimator = (
  prev: INodeVals,
  node: INodeVals,
  root: INodeVals,
  treeSetter: Dispatch<SetStateAction<INodeVals>>,
): Promise<boolean> => {
  return new Promise((resolve) => {
    // animation interval
    let step = 1;
    prev.isActive = true;
    node.isActive = true;
    treeSetter({ ...root });
    const animInt = setInterval(() => {
      switch (step) {
        case 1:
          prev.isActive = node.isActive = false;
          prev.isSelected = node.isSelected = true;
          const temp = prev.value;
          prev.value = node.value;
          node.value = temp;
          treeSetter({ ...root });
          break;
        case 2:
          prev.isSelected = node.isSelected = false;
          treeSetter({ ...root });
          break;
        case 3:
          clearInterval(animInt);
          resolve(true);
          return;
      }
      step++;
    }, 1000);
  });
};
const percolatingDown = async (
  nodes: INodeVals | undefined,
  head: INodeVals,
  treeSetter: Dispatch<SetStateAction<INodeVals>>,
) => {
  if (!nodes || !nodes.nodeL) return;
  const leftVal = nodes.nodeL.value;
  if (
    nodes.nodeR &&
    (leftVal > nodes.value || nodes.nodeR.value > nodes.value)
  ) {
    if (leftVal > nodes.nodeR.value)
      await swapAnimator(nodes, nodes.nodeL, head, treeSetter);
    else await swapAnimator(nodes, nodes.nodeR, head, treeSetter);
  } else if (leftVal > nodes.value)
    await swapAnimator(nodes, nodes.nodeL, head, treeSetter);
  await percolatingDown(nodes.nodeL, head, treeSetter);
  await percolatingDown(nodes.nodeR, head, treeSetter);
};
const percolatingUp = async (
  nodes: INodeVals | undefined,
  head: INodeVals,
  treeSetter: Dispatch<SetStateAction<INodeVals>>,
) => {
  if (!nodes) return;
  await percolatingUp(nodes.nodeL, head, treeSetter);
  await percolatingUp(nodes.nodeR, head, treeSetter);
  if (nodes.nodeL && nodes.value < nodes.nodeL.value)
    await swapAnimator(nodes, nodes.nodeL, head, treeSetter);
  if (nodes.nodeR && nodes.value < nodes.nodeR.value)
    await swapAnimator(nodes, nodes.nodeR, head, treeSetter);
};

const popMin = async (
  head: INodeVals,
  root: INodeVals | undefined,
  unfilledLevel: MutableRefObject<number>,
  treeSetter: Dispatch<SetStateAction<INodeVals>>,
  level: number = 1,
  allRights: boolean = true,
): Promise<number | undefined> => {
  // base case
  if (unfilledLevel.current === 0) return;

  // Reccursive condition
  let deleted: number | undefined;
  if (root?.nodeR)
    deleted = await popMin(head, root.nodeR, unfilledLevel,treeSetter, level + 1, allRights); // prettier-ignore
  if (!deleted && root?.nodeL)
    deleted = await popMin(head, root.nodeL, unfilledLevel,treeSetter, level + 1, false); //prettier-ignore

  // functions
  if (deleted) return deleted;
  if (unfilledLevel.current === level) {
    if (root?.nodeR) {
      await swapAnimator(head, root.nodeR, head, treeSetter);
      deleted = root.nodeR.value;
      delete root.nodeR;
      return deleted;
    } else if (root?.nodeL) {
      await swapAnimator(head, root.nodeL, head, treeSetter);
      deleted = root.nodeL.value;
      delete root.nodeL;
      return deleted;
    }
  }
  return deleted;
};
const delRightMost = async (
  head: INodeVals,
  root: INodeVals,
  treeSetter: Dispatch<SetStateAction<INodeVals>>,
  unfilledLevel: MutableRefObject<number>,
  level: number = 1,
): Promise<number> => {
  let deleted = root.value;
  if (level === unfilledLevel.current) {
    deleted = root.value;
    root.value = -1;
    unfilledLevel.current -= 1;
  } else if (level === unfilledLevel.current - 1) {
    if (root.nodeR) {
      await swapAnimator(head, root.nodeR, head, treeSetter);
      deleted = root.nodeR.value;
    }
    delete root.nodeR;
    unfilledLevel.current -= 1;
  } else if (root.nodeR)
    deleted = await delRightMost(head, root.nodeR, treeSetter, unfilledLevel, level + 1); //prettier-ignore
  return deleted;
};

export {
  delRightMost,
  swapAnimator,
  insertElem,
  percolatingDown,
  percolatingUp,
  popMin,
};
