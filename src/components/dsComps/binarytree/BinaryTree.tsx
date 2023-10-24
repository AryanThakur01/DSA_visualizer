import { FC } from "react";
import BinaryTreeAnimation from "./BinaryTreeAnimation";

interface IBinaryTree {}

const BinaryTree: FC<IBinaryTree> = () => {
  return (
    <>
      <BinaryTreeAnimation />
    </>
  );
};

export default BinaryTree;
