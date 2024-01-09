import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import SelectionSortAnimation from "./SelectionSortAnimation";
import { Diamond } from "lucide-react";

const SelectionSort = () => {
  return (
    <>
      <Template title="Selection Sort" icon={<Diamond />} intro="">
        <LLSectionTemplate>
          <SelectionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default SelectionSort;
