import MinHeap from "@/components/dsComps/heaps/minheap/MinHeap";
import { FC } from "react";

interface IMinHeap {}

const page: FC<IMinHeap> = () => {
  return (
    <>
      <MinHeap />
    </>
  );
};

export default page;
