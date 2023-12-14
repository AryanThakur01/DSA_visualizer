import { FC } from "react";
import BinaryTreeAnimation from "./BinaryTreeAnimation";
import Template, { LLSectionTemplate } from "../Template";
import { TreesIcon } from "lucide-react";

interface IBinaryTree {}

const BinaryTree: FC<IBinaryTree> = () => {
  return (
    <>
      <Template title="Binary Tree" icon={<TreesIcon />} intro="">
        <LLSectionTemplate>
          <BinaryTreeAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BinaryTree;
