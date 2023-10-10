import { Layers } from "lucide-react";
import React from "react";
import StackAnimation from "./components/StackAnimation";
import Cprogramme from "./components/Cprogramme";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <article>
        <h1
          id="Stack"
          className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit"
        >
          Stack
          <Layers />
        </h1>
        <hr className="border-border mt-2 mb-10" />
        <p>
          A stack is a fundamental data structure in computer science that
          follows the Last-In, First-Out (LIFO) principle. It can be thought of
          as a collection of elements with two primary operations: push and pop.
        </p>
      </article>
      <div>
        <StackAnimation />
        <Cprogramme />
      </div>
    </>
  );
}
