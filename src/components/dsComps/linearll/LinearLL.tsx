import { FC } from "react";
import Template from "../Template";
import { AlignVerticalSpaceAround } from "lucide-react";
import LinearLLAnimation from "./LinearLLAnimation";

interface ILinearLL {}

const LinearLL: FC<ILinearLL> = () => {
  return (
    <>
      <Template
        title="Linear Linked List"
        icon={<AlignVerticalSpaceAround className="rotate-90" />}
        intro=" A linked list is a fundamental data structure in computer science used for organizing and managing collections of data. It consists of a sequence of elements, each of which contains a value or data and a reference (or link) to the next element in the sequence. Linked lists are widely used because of their simplicity and flexibility. There are several types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists. "
      >
        <LinearLLAnimation />
        {/* <StackAnimation /> */}
        {/* <Cprogramme /> */}
      </Template>
    </>
  );
};

export default LinearLL;
