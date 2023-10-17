import { FC } from "react";
import Template from "../Template";
import { AlignVerticalSpaceAround } from "lucide-react";
import LinearLLAnimation from "./LinearLLAnimation";

interface ILinearLL {}

const LinearLL: FC<ILinearLL> = () => {
  return (
    <>
      <Template
        title="Linked List"
        icon={<AlignVerticalSpaceAround className="rotate-90" />}
        intro="A linked list is a fundamental data structure in computer science used to store and manage collections of data. Unlike arrays, which store elements in contiguous memory locations, linked lists organize data elements into a sequence of nodes, where each node contains both the data and a reference (or a link) to the next node in the sequence. This linking of nodes allows for dynamic memory allocation and efficient insertion and removal of elements, making linked lists a versatile and essential concept in programming."
      >
        <LinearLLAnimation />
      </Template>
    </>
  );
};

export default LinearLL;
