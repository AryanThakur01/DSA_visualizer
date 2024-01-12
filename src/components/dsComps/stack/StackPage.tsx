import React, { FC, ReactNode } from "react";
import Template, { LLSectionTemplate } from "../Template";
import { Layers } from "lucide-react";
import StackAnimation from "./StackAnimation";
import Link from "next/link";

interface IStackPage {
  children: ReactNode;
}

const StackPage: FC<IStackPage> = ({ children }) => {
  const contentList = [
    {
      id: "what-is-stack",
      title: "What is Stack?",
      paras: [
        "A stack is a fundamental data structure in computer science that operates on the Last In, First Out (LIFO) principle. It is a collection of elements with two main operations: push, which adds an element to the top of the stack, and pop, which removes the top element. Think of it as a stack of plates; you add a plate to the top (push), and you take the topmost plate off (pop). Stacks are commonly used for managing function calls, handling expressions in programming, and efficiently managing memory in computer systems.",
      ],
    },
    {
      id: "applications",
      title: "Applications:",
      list: [
        {
          title: "Function Call Management",
          data: "When a function is called, the information about the function call is pushed onto the stack, and when the function completes, this information is popped off the stack.",
        },
        {
          title: "Expression Evaluation",
          data: "Stacks are often used to evaluate expressions, especially those involving parentheses. For example, in parsing mathematical expressions, you can use a stack to keep track of operators and operands.",
        },
        {
          title: "Undo Mechanism",
          data: "In applications like text editors, stacks are used to implement undo operations. Each edit operation is pushed onto the stack, and undo pops the operations off the stack.",
        },
        {
          title: "Backtracking Algorithms",
          data: "Stacks are employed in backtracking algorithms, where you need to explore different paths and return to previous choices.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Stack"
        icon={<Layers />}
        intro="Welcome to Stacks: Simplifying Computing."
        contentList={contentList}
      >
        <StackAnimation />
        {children}
      </Template>
    </>
  );
};

export default StackPage;
