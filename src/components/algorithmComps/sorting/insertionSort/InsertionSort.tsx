import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import InsertionSortAnimation from "./InsertionSortAnimation";

const InsertionSort = () => {
  return (
    <>
      <Template
        title="Insertion Sort"
        // icon={<Layers />}
        intro=""
      >
        <LLSectionTemplate>
          <InsertionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default InsertionSort;
