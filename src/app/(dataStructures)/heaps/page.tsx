import SubAnimationCards from "@/components/SubAnimationCards";
import React, { FC } from "react";

interface IPage {}

const page: FC<IPage> = () => {
  const subAnimations = [
    {
      title: "Min Heap",
      description:
        "A Min Heap is a specialized binary heap data structure in which the value of each node is less than or equal to the values of its children, ensuring the minimum element is at the root.",
      pageLink: "/heaps/minheap",
    },
    {
      title: "Max Heap",
      description:
        "A Max Heap is a binary heap where the value of each node is greater than or equal to the values of its children, ensuring the maximum element is at the root.",
      pageLink: "/heaps/maxheap",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {subAnimations.map((heaps) => (
        <SubAnimationCards {...heaps} key={heaps.title} />
      ))}
    </div>
  );
};

export default page;
