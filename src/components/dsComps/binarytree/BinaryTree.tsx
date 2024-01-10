import { FC, ReactNode } from "react";
import BinaryTreeAnimation from "./BinaryTreeAnimation";
import Template, { LLSectionTemplate } from "../Template";
import { TreesIcon } from "lucide-react";

interface IBinaryTree {
  children: ReactNode;
}

const BinaryTree: FC<IBinaryTree> = ({ children }) => {
  return (
    <>
      <Template title="Binary Tree" icon={<TreesIcon />} intro="">
        <LLSectionTemplate>
          <BinaryTreeAnimation />
        </LLSectionTemplate>
        {children}
      </Template>
    </>
  );
};

export default BinaryTree;
