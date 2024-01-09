import { FC } from "react";
import MinHeapAnimation from "./MinHeapAnimation";
import Template, { LLSectionTemplate } from "../../Template";
import { BringToFront } from "lucide-react";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  return (
    <Template title="Min Heap" intro="" icon={<BringToFront />}>
      <LLSectionTemplate>
        <MinHeapAnimation />
      </LLSectionTemplate>
    </Template>
  );
};

export default MinHeap;
