import SubAnimationCards from "@/components/SubAnimationCards";
import React from "react";

const page = () => {
  const subAnimations = [
    {
      title: "Bubble Sort",
      description:
        "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass-throughs continue until the list is sorted.",
      pageLink: "/sorting/bubblesort",
    },
    {
      title: "Selection Sort",
      description:
        "An in-place comparison sorting algorithm that divides the input list into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element of the unsorted region.",
      pageLink: "/sorting/selectionsort",
    },
    {
      title: "Insertion Sort",
      description:
        "A sorting algorithm that builds the final sorted array one item at a time. It takes each element and inserts it into its correct position in the already sorted part of the array. ",
      pageLink: "/sorting/insertionsort",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 2xl: grid-cols-3 gap-4">
      {subAnimations.map((heaps) => (
        <SubAnimationCards {...heaps} />
      ))}
    </div>
  );
};

export default page;
