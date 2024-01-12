import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import BubbleSortAnimation from "./BubbleSortAnimation";
import { Droplets } from "lucide-react";

const BubbleSort = () => {
  const contentList = [
    {
      id: "what-is-bubble-sort",
      title: "What is Bubble Sort?",
      paras: [
        "Bubble Sort is a straightforward sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the entire list is sorted. Although not the most efficient, Bubble Sort's simplicity makes it a valuable learning tool and a basis for more complex sorting algorithms.",
      ],
    },
    {
      id: "applications-bubble-sort",
      title: "Applications:",
      list: [
        {
          title: "Educational Tool",
          data: "Bubble Sort is widely used as an educational tool to introduce the concept of sorting algorithms due to its simplicity and easy-to-understand implementation.",
        },
        {
          title: "Small Dataset Sorting",
          data: "In scenarios with small datasets or nearly sorted data, Bubble Sort can be practical, given its simplicity and ease of implementation.",
        },
        {
          title: "Algorithmic Understanding",
          data: "Studying Bubble Sort helps build a foundational understanding of algorithmic concepts, such as sorting and optimization.",
        },
        {
          title: "Sorting Algorithm Benchmark",
          data: "While not the most efficient, Bubble Sort can serve as a benchmark for comparing the performance of more complex sorting algorithms in certain scenarios.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Bubble Sort"
        icon={<Droplets />}
        intro="Riding the Waves of Sorting Simplicity."
        contentList={contentList}
      >
        <LLSectionTemplate>
          <BubbleSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default BubbleSort;
