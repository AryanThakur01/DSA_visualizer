import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import SelectionSortAnimation from "./SelectionSortAnimation";

const SelectionSort = () => {
  return (
    <>
      <Template
        title="Selection Sort"
        // icon={<Layers />}
        intro=""
      >
        <LLSectionTemplate>
          <SelectionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default SelectionSort;
