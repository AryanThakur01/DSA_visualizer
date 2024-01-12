import { FC } from "react";
import MinHeapAnimation from "./MinHeapAnimation";
import Template, { LLSectionTemplate } from "../../Template";
import { BringToFront } from "lucide-react";

interface IMinHeap {}

const MinHeap: FC<IMinHeap> = () => {
  const contentList = [
    {
      id: "what-is-min-heap",
      title: "What is Min Heap?",
      paras: [
        "A Min Heap is a binary tree data structure where the value of each node is less than or equal to the values of its children. This hierarchical arrangement ensures that the smallest element is always at the root, making Min Heaps valuable for quick retrieval of the minimum element.",
      ],
    },
    {
      id: "applications-min-heap",
      title: "Applications:",
      list: [
        {
          title: "Priority Queues",
          data: "Min Heaps are commonly used to implement priority queues, where the element with the highest priority (lowest value) is readily accessible at the top of the heap.",
        },
        {
          title: "Dijkstra's Algorithm",
          data: "In graph algorithms like Dijkstra's shortest path algorithm, Min Heaps efficiently extract the minimum distance node during each iteration, optimizing pathfinding processes.",
        },
        {
          title: "Huffman Coding",
          data: "Min Heaps play a role in Huffman coding, a compression technique, by efficiently selecting and merging the smallest frequency nodes during the encoding process.",
        },
        {
          title: "Job Scheduling",
          data: "Min Heaps aid in job scheduling scenarios, ensuring that the job with the shortest expected processing time is prioritized for execution.",
        },
      ],
    },
  ];
  return (
    <Template
      title="Min Heap"
      intro="Efficient Sorting: Exploring the Essentials of Min Heaps."
      icon={<BringToFront />}
      contentList={contentList}
    >
      <LLSectionTemplate className="my-4">
        <MinHeapAnimation />
      </LLSectionTemplate>
    </Template>
  );
};

export default MinHeap;
