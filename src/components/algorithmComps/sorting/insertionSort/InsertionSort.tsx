import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import InsertionSortAnimation from "./InsertionSortAnimation";
import { PictureInPicture } from "lucide-react";

const InsertionSort = () => {
  return (
    <>
      <Template title="Insertion Sort" icon={<PictureInPicture />} intro="">
        <LLSectionTemplate>
          <InsertionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default InsertionSort;
