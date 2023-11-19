import { FC } from "react";
import MinHeapAnimation from "./MinHeapAnimation";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  return (
    <>
      <MinHeapAnimation />
    </>
  );
};

export default MinHeap;
