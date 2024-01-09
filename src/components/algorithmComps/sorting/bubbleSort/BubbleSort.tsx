import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import BubbleSortAnimation from "./BubbleSortAnimation";
import { Droplets } from "lucide-react";

const BubbleSort = () => {
  return (
    <>
      <Template title="Bubble Sort" icon={<Droplets />} intro="">
        <LLSectionTemplate>
          <BubbleSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BubbleSort;
