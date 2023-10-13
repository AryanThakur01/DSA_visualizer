import { TrainTrack } from "lucide-react";
import SinglyLinearLL from "./components/SinglyLinearLL";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <article>
        <h1
          id="Stack"
          className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit"
        >
          Linked List
          <TrainTrack />
        </h1>
        <hr className="border-border mt-2 mb-10" />
        <p>
          A linked list is a fundamental data structure in computer science used
          for organizing and managing collections of data. It consists of a
          sequence of elements, each of which contains a value or data and a
          reference (or link) to the next element in the sequence. Linked lists
          are widely used because of their simplicity and flexibility. There are
          several types of linked lists, including singly linked lists, doubly
          linked lists, and circular linked lists.
        </p>
      </article>
      <div className="my-5 md:max-w-[70vw]">
        <SinglyLinearLL />
        {/* <Cprogramme /> */}
      </div>
    </>
  );
}
