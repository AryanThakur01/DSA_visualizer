import React, { FC, ReactNode } from "react";
import Template, { LLSectionTemplate } from "../Template";
import { Layers } from "lucide-react";
import StackAnimation from "./StackAnimation";

interface IStackPage {
  children: ReactNode;
}

const StackPage: FC<IStackPage> = ({ children }) => {
  const stackApplictaion = [
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
  ];
  return (
    <>
      <Template
        title="Stack"
        icon={<Layers />}
        intro="A 'Stack' in computer science refers to a data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates in a cafeteria – you add a new plate to the top of the stack, and when you want to take a plate, you take it from the top."
      >
        <LLSectionTemplate>
          <p className="my-2">
            In a programming context, a stack is often used to manage function
            calls and local variables in a program&apos;s memory. Here are some
            key operations associated with a stack:
          </p>
          <ul className="list-disc">
            <li>
              <span className="pr-2 font-bold">Push:</span>Adds an item to the
              top of the stack.
            </li>
            <li className="pr-2">
              <span className="font-bold">Pop:</span> Removes the item from the
              top of the stack.
            </li>
            <li className="pr-2">
              <span className="font-bold">Peek or Top:</span> Returns the item
              at the top of the stack without removing it.
            </li>
            <li className="pr-2">
              <span className="font-bold">IsEmpty:</span> Checks if the stack is
              empty.
            </li>
          </ul>
        </LLSectionTemplate>
        <StackAnimation />
        <LLSectionTemplate>
          <h2 className="text-xl font-bold my-3">Applications:</h2>
          <ul className="list-decimal pl-6 my-3">
            {stackApplictaion.map((item, i) => (
              <li key={"stack-" + i}>
                <span className="min-w-[14rem] font-bold pr-3">
                  {item.title}:
                </span>
                <span className="text-foreground/60">{item.data}</span>
              </li>
            ))}
          </ul>
          <p className="text-card-foreground/60">
            In programming languages, a call stack is a specific type of stack
            that is used to keep track of function calls and their local
            variables. When a function is called, a new frame is pushed onto the
            call stack, and when the function completes, its frame is popped off
            the stack.
          </p>
        </LLSectionTemplate>
        {children}
      </Template>
    </>
  );
};

export default StackPage;
