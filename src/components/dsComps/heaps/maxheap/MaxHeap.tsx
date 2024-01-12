import React, { FC } from "react";
import MaxHeapAnimation from "./MaxHeapAnimation";
import Template, { LLSectionTemplate } from "../../Template";
import { BringToFront } from "lucide-react";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  const contentList = [
    {
      id: "what-is-max-heap",
      title: "What is Max Heap?",
      paras: [
        "A Max Heap is a binary tree data structure where the value of each node is greater than or equal to the values of its children. This hierarchical arrangement ensures that the largest element is always at the root, making Max Heaps valuable for quick retrieval of the maximum element.",
      ],
    },
    {
      id: "applications-max-heap",
      title: "Applications:",
      list: [
        {
          title: "Priority Queues",
          data: "Max Heaps are commonly used to implement priority queues, where the element with the highest priority (largest value) is readily accessible at the top of the heap.",
        },
        {
          title: "Heap Sort",
          data: "In the Heap Sort algorithm, Max Heaps facilitate the sorting process by repeatedly extracting the maximum element, resulting in a sorted array.",
        },
        {
          title: "Graph Algorithms",
          data: "Max Heaps find application in various graph algorithms, such as Prim's algorithm for minimum spanning trees, where the maximum-weight edge is efficiently determined.",
        },
        {
          title: "Job Scheduling",
          data: "Max Heaps aid in job scheduling scenarios, ensuring that the job with the longest expected processing time is prioritized for execution.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Max Heap"
        intro="Max Heap: Scaling Peaks of Efficiency in Simple Terms."
        icon={<BringToFront />}
        contentList={contentList}
      >
        <LLSectionTemplate className="my-4">
          <MaxHeapAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default MinHeap;
