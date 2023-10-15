import React from "react";
import Template from "../Template";
import { Layers } from "lucide-react";
import StackAnimation from "./StackAnimation";
import Cprogramme from "./Cprogramme";

type Props = {};

const StackPage = (props: Props) => {
  return (
    <>
      <Template
        title="Stack"
        icon={<Layers />}
        intro="A stack is a fundamental data structure in computer science that follows the Last-In, First-Out (LIFO) principle. It can be thought of as a collection of elements with two primary operations: push and pop. "
      >
        <StackAnimation />
        <Cprogramme />
      </Template>
    </>
  );
};

export default StackPage;
