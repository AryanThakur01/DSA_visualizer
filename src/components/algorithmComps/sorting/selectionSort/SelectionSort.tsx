import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import SelectionSortAnimation from "./SelectionSortAnimation";
import { Diamond } from "lucide-react";

const SelectionSort = () => {
  const contentList = [
    {
      id: "what-is-selection-sort",
      title: "What is Selection Sort?",
      paras: [
        "Selection Sort is a simple sorting algorithm that divides the input list into two parts: a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted region and swaps it with the first element of the unsorted region. This process continues until the entire list is sorted.",
      ],
    },
    {
      id: "applications-selection-sort",
      title: "Applications:",
      list: [
        {
          title: "Educational Purposes",
          data: "Selection Sort is frequently used in educational settings to introduce students to sorting algorithms due to its simplicity and ease of understanding.",
        },
        {
          title: "Small to Medium-sized Lists",
          data: "In scenarios with small to medium-sized lists, where the overhead of more complex algorithms might be unnecessary, Selection Sort can be a practical choice.",
        },
        {
          title: "Simple Sorting Requirements",
          data: "For simple sorting requirements and cases where the list is nearly sorted, Selection Sort's uncomplicated nature can be advantageous.",
        },
        {
          title: "Understanding Sorting Principles",
          data: "Studying Selection Sort provides insights into the principles of sorting algorithms, paving the way for comprehension of more advanced techniques.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Selection Sort"
        icon={<Diamond />}
        intro="Picking Order Out of Chaos."
        contentList={contentList}
      >
        <LLSectionTemplate>
          <SelectionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default SelectionSort;
