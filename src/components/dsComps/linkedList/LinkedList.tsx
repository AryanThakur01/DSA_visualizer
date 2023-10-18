import { FC } from "react";
import Template, { LLSectionTemplate } from "../Template";
import { AlignVerticalSpaceAround } from "lucide-react";
import LinearLLAnimation from "./LinearLLAnimation";
import CircularLLAnimation from "./CircularLLAnimation";

interface ILinearLL {}

const LinearLL: FC<ILinearLL> = () => {
  return (
    <>
      <Template
        title="Linked List"
        icon={<AlignVerticalSpaceAround className="rotate-90" />}
        intro="A linked list is a fundamental data structure in computer science used to store and manage collections of data. Unlike arrays, which store elements in contiguous memory locations, linked lists organize data elements into a sequence of nodes, where each node contains both the data and a reference (or a link) to the next node in the sequence. This linking of nodes allows for dynamic memory allocation and efficient insertion and removal of elements, making linked lists a versatile and essential concept in programming."
      >
        <LLSectionTemplate>
          <LinearLLAnimation />
        </LLSectionTemplate>
        <LLSectionTemplate subHeader="Singly Circular Linked List" id="cll">
          <p>
            A linear circular linked list, sometimes referred to as a circular
            singly linked list, is a data structure that extends the concept of
            a traditional singly linked list by connecting the tail node back to
            the head node, forming a closed loop. This structure offers several
            advantages in terms of efficient traversal and management of
            elements.
          </p>
          {/* <CircularLLAnimation /> */}
          <p>
            <b>
              Here are some key features and characteristics of a linear
              circular linked list:
            </b>
          </p>
          <ul>
            <li>
              <b>Circular Structure:</b> In a linear circular linked list, the
              last node of the list points to the first node, creating a loop or
              cycle. This circular nature allows for continuous traversal
              without a defined endpoint, which can be useful in certain
              applications.
            </li>
            <li>
              <p>
                <b>Advantages</b>
              </p>
              <ul>
                <li>
                  Efficient Traversal: Since there is no &apos;end&apos; of the
                  list, you can repeatedly traverse through the entire list
                  without the need to check for the end condition, making it
                  more efficient for certain tasks.
                </li>
                <li>
                  Circular Buffer: Linear circular linked lists are often used
                  to implement circular buffers, which are useful for managing
                  data streams with a fixed, wrap-around size.
                </li>
              </ul>
            </li>
            <li></li>
          </ul>
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default LinearLL;
