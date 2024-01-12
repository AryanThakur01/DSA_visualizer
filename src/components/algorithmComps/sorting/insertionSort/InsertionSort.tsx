import React from "react";
import Template, { LLSectionTemplate } from "@/components/dsComps/Template";
import InsertionSortAnimation from "./InsertionSortAnimation";
import { PictureInPicture } from "lucide-react";

const InsertionSort = () => {
  const contentList = [
    {
      id: "what-is-insertion-sort",
      title: "What is Insertion Sort?",
      paras: [
        "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It takes each element from the unsorted part of the array and inserts it into its correct position in the already sorted part. This process continues until the entire array is sorted.",
      ],
    },
    {
      id: "applications-insertion-sort",
      title: "Applications:",
      list: [
        {
          title: "Small Dataset Sorting",
          data: "Insertion Sort is effective for small datasets or partially sorted data, where its simplicity and low overhead make it a practical choice.",
        },
        {
          title: "Online Algorithm",
          data: "As an 'online' algorithm, Insertion Sort is suitable for scenarios where the data arrives in a streaming fashion, and sorting must be performed as each element is received.",
        },
        {
          title: "Adaptive Sorting",
          data: "Insertion Sort is adaptive, meaning its performance improves when dealing with partially sorted arrays, making it a valuable choice in such cases.",
        },
        {
          title: "Educational Tool",
          data: "Insertion Sort serves as an educational tool for teaching sorting algorithms, offering a clear and understandable example of the sorting process.",
        },
      ],
    },
  ];
  return (
    <>
      <Template
        title="Insertion Sort"
        icon={<PictureInPicture />}
        intro="Building Order One Element at a Time."
        contentList={contentList}
      >
        <LLSectionTemplate>
          <InsertionSortAnimation />
        </LLSectionTemplate>
      </Template>
    </>
  );
};

export default InsertionSort;
