import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import React from "react";
import BinarySearchAnimation from "./BinarySearchAnimation";
import { Split } from "lucide-react";

const BinarySearch = () => {
  const contentList = [
    {
      id: "what-is-binary-search",
      title: "What is Binary Search?",
      paras: [
        "Binary Search is a highly efficient algorithm for finding a specific target value within a sorted array or list. It works by repeatedly dividing the search range in half until the target is found, or the search space is narrowed down to nothing. This 'divide and conquer' approach makes binary search one of the fastest search algorithms.",
      ],
    },
    {
      id: "applications-binary-search",
      title: "Applications:",
      list: [
        {
          title: "Fast Information Retrieval",
          data: "Binary search excels in quickly finding specific data in sorted collections, significantly reducing search times compared to linear search algorithms.",
        },
        {
          title: "Efficient Database Queries",
          data: "In database systems, binary search is employed to efficiently locate records, especially in scenarios where data is sorted.",
        },
        {
          title: "Game Guessing Strategies",
          data: "Binary search principles are often utilized in game strategies, where the player systematically narrows down possibilities for optimal decision-making.",
        },
        {
          title: "Sorting Algorithms Enhancements",
          data: "Binary search contributes to the efficiency of sorting algorithms by providing a quick way to determine the correct position of elements.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Binary Search"
        icon={<Split />}
        intro="Cutting Through Chaos, Finding Order in a Sorted Symphony."
        contentList={contentList}
      >
        <LLSectionTemplate className="my-4">
          <BinarySearchAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BinarySearch;
