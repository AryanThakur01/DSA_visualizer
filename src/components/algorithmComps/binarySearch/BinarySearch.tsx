import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import React from "react";
import BinarySearchAnimation from "./BinarySearchAnimation";

const BinarySearch = () => {
  return (
    <>
      <Template
        title="Binary Search"
        // icon={<Layers />}
        intro=""
      >
        <LLSectionTemplate>
          <BinarySearchAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BinarySearch;
