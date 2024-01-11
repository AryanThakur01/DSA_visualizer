import SubAnimationCards from "@/components/SubAnimationCards";
import React, { FC } from "react";

interface IPage {}

const page: FC<IPage> = () => {
  const subAnimations = [
    {
      title: "Min Heap",
      description:
        "A Min-Heap is defined as a type of Heap Data Structure in which each internal node is smaller than or equal to its children. The heap data structure is a type of binary tree that is commonly used in computer science for various purposes, including sorting, searching, and organizing data.",
      pageLink: "/heaps/minheap",
    },
    {
      title: "Max Heap",
      description:
        "A max heap is a complete binary tree in which the value of a node is greater than or equal to the values of its children. Max Heap data structure is useful for sorting data using heap sort.",
      pageLink: "/heaps/maxheap",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 2xl: grid-cols-3 gap-4">
      {subAnimations.map((heaps) => (
        <SubAnimationCards {...heaps} />
      ))}
      {/* This is the heaps home */}
    </div>
  );
};

export default page;
