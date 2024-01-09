import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import React from "react";
import BinarySearchAnimation from "./BinarySearchAnimation";
import { Split } from "lucide-react";

const BinarySearch = () => {
  return (
    <>
      <Template title="Binary Search" icon={<Split />} intro="">
        <LLSectionTemplate>
          <BinarySearchAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BinarySearch;
