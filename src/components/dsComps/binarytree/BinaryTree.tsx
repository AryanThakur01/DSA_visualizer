import { FC, ReactNode } from "react";
import BinaryTreeAnimation from "./BinaryTreeAnimation";
import Template, { LLSectionTemplate } from "../Template";
import { TreesIcon } from "lucide-react";

interface IBinaryTree {
  children: ReactNode;
}

const BinaryTree: FC<IBinaryTree> = ({ children }) => {
  const contentList = [
    {
      id: "what-is-binary-tree",
      title: "What is Binary Tree?",
      paras: [
        "A binary tree is a hierarchical data structure composed of nodes, each having at most two children: a left child and a right child. The topmost node is called the root, and nodes with no children are leaves. Binary trees provide a flexible and efficient way to organize and retrieve data.",
      ],
    },
    {
      id: "applications-binary-tree",
      title: "Applications:",
      list: [
        {
          title: "Binary Search",
          data: "Binary trees are widely used for implementing efficient search algorithms, particularly in binary search where the tree's structure allows for rapid elimination of half the remaining search space with each comparison.",
        },
        {
          title: "Expression Trees",
          data: "In compiler design and mathematical expression evaluation, binary trees are employed as expression trees. Each node represents an operator or operand, facilitating efficient expression parsing and evaluation.",
        },
        {
          title: "Hierarchical Structures",
          data: "Binary trees serve as the foundation for hierarchical structures like file systems and organizational charts, enabling the efficient representation and navigation of parent-child relationships.",
        },
        {
          title: "Huffman Coding",
          data: "Binary trees find application in data compression algorithms such as Huffman coding, where a binary tree is used to represent variable-length codes assigned to different characters based on their frequencies.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Binary Tree"
        icon={<TreesIcon />}
        intro="Unlocking the Digital Forest: Journey into the World of Binary Trees!"
        contentList={contentList}
      >
        <LLSectionTemplate className="my-8">
          <BinaryTreeAnimation />
        </LLSectionTemplate>
        {children}
      </Template>
    </>
  );
};

export default BinaryTree;
