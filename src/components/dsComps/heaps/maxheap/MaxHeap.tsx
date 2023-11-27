import React, { FC } from "react";
import MaxHeapAnimation from "./MaxHeapAnimation";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  return (
    <>
      <MaxHeapAnimation />
    </>
  );
};

export default MinHeap;
