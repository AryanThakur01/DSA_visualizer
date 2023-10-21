import { FC } from "react";
import { LLSectionTemplate } from "../Template";
interface Sll {}

const Sll: FC<Sll> = () => {
  return (
    <LLSectionTemplate id="sll" subHeader="Linear Linked List">
      <p>
        A singly linked list is a fundamental data structure in computer science
        and programming. It is a collection of nodes, where each node contains
        data and a reference or link to the next node in the sequence. This data
        structure is often used for dynamic data storage and is a core component
        of many algorithms and data manipulation operations.
      </p>
      <div className="note"></div>
    </LLSectionTemplate>
  );
};

export default Sll;
