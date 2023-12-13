import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import BubbleSortAnimation from "./BubbleSortAnimation";

const BubbleSort = () => {
  return (
    <>
      <Template
        title="Bubble Sort"
        // icon={<Layers />}
        intro=""
      >
        <LLSectionTemplate>
          <BubbleSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BubbleSort;
