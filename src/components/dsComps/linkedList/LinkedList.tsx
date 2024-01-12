import { FC, ReactNode } from "react";
import Template, { LLSectionTemplate } from "../Template";
import { AlignVerticalSpaceAround } from "lucide-react";
import LinearLLAnimation from "./LinearLLAnimation";

interface ILinearLL {
  children: ReactNode;
}

const LinearLL: FC<ILinearLL> = ({ children }) => {
  const contentList = [
    {
      id: "what-is-linked-list",
      title: "What is Linked List?",
      paras: [
        "A linked list is a linear data structure consisting of nodes, where each node points to the next one in the sequence.",
        "Unlike arrays, linked lists do not have a fixed size, and their elements are dynamically allocated, facilitating efficient insertion and deletion operations.",
        "Linked lists come in various forms, including singly linked lists, doubly linked lists, and circular linked lists, each with unique characteristics.",
      ],
    },
    {
      id: "applications-linked-list",
      title: "Applications:",
      list: [
        {
          title: "Dynamic Memory Allocation",
          data: "Linked lists allow for dynamic memory allocation, enabling efficient use of memory as elements can be dynamically added or removed without the need for pre-allocation.",
        },
        {
          title: "Implementation of Stacks and Queues",
          data: "Linked lists serve as the foundation for implementing other data structures like stacks and queues, providing a straightforward way to manage elements with dynamic size requirements.",
        },
        {
          title: "Database Management Systems",
          data: "In database management systems, linked lists find application in managing relational database records where efficient insertion and deletion operations are crucial.",
        },
        {
          title: "Undo Functionality",
          data: "Similar to stacks, linked lists are used in applications that require an undo mechanism, where each operation is recorded in a node, allowing users to backtrack through their actions.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Linked List"
        icon={<AlignVerticalSpaceAround className="rotate-90" />}
        intro="Unlocking Flexibility: Linked Lists in the Dynamic World of Data."
        contentList={contentList}
      >
        <LLSectionTemplate className="my-16">
          <LinearLLAnimation />
        </LLSectionTemplate>
        {children}
      </Template>
    </>
  );
};

export default LinearLL;
