import MaxHeap from "@/components/dsComps/heaps/maxheap/MaxHeap";
import { FC } from "react";

interface IMinHeap {}

const page: FC<IMinHeap> = () => {
  return (
    <>
      <MaxHeap />
    </>
  );
};

export default page;
