import React, { FC } from "react";
import MaxHeapAnimation from "./MaxHeapAnimation";
import Template, { LLSectionTemplate } from "../../Template";
import { BringToFront } from "lucide-react";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  return (
    <>
      <Template title="Max Heap" intro="" icon={<BringToFront />}>
        <LLSectionTemplate>
          <MaxHeapAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default MinHeap;
