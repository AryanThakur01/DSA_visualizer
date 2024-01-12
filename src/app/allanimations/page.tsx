import { assets } from "@/assets/assets";
import SubAnimationCards from "@/components/SubAnimationCards";
import React from "react";

const page = () => {
  const subAnimations = [
    {
      title: "Stack",
      elements: [
        {
          title: "Stack",
          description:
            "A stack is a fundamental data structure in computer science that operates on the Last In, First Out (LIFO) principle. It is commonly used for managing function calls, handling expressions, and efficient memory management.",
          pageLink: "/stack",
          image: assets.Stack,
        },
      ],
    },
    {
      title: "Linked List",
      elements: [
        {
          title: "Linked List Introduction",
          description:
            "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next one in the sequence. Linked lists provide dynamic memory allocation and efficient insertion and deletion operations.",
          pageLink: "/linkedlist",
          image: assets.LinkedList,
        },
      ],
    },
    {
      title: "Binary Tree",
      elements: [
        {
          title: "Binary Tree Basics",
          description:
            "A binary tree is a hierarchical data structure composed of nodes, each having at most two children. Binary trees provide a flexible and efficient way to organize and retrieve data.",
          pageLink: "/binarytree",
          image: assets.BinaryTree,
        },
      ],
    },
    {
      title: "Heaps",
      elements: [
        {
          title: "Min Heap",
          description:
            "A Min Heap is a specialized binary heap data structure in which the value of each node is less than or equal to the values of its children, ensuring the minimum element is at the root.",
          pageLink: "/heaps/minheap",
          image: assets.Heaps.MinHeap,
        },
        {
          title: "Max Heap",
          description:
            "A Max Heap is a binary heap where the value of each node is greater than or equal to the values of its children, ensuring the maximum element is at the root.",
          pageLink: "/heaps/maxheap",
          image: assets.Heaps.MaxHeap,
        },
      ],
    },
    {
      title: "Puzzles",
      elements: [
        {
          title: "Tower of Hanoi Overview",
          description:
            "The Tower of Hanoi is a classic mathematical puzzle consisting of three rods and a number of disks of different sizes. The objective is to move the entire stack of disks from one rod to another following specific rules.",
          pageLink: "/misc/toh",
          image: assets.Puzzles.Toh,
        },
      ],
    },
    {
      title: "Searching",
      elements: [
        {
          title: "Binary Search",
          description:
            "Binary Search is a highly efficient algorithm for finding a specific target value within a sorted array or list. It works by repeatedly dividing the search range in half until the target is found.",
          pageLink: "/binarysearch",
          image: assets.BinarySearch,
        },
      ],
    },
    {
      title: "Sorting",
      elements: [
        {
          title: "Bubble Sort",
          description:
            "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It's known for its simplicity but is less efficient for large datasets.",
          pageLink: "/sorting/bubblesort",
          image: assets.Sorting.BubbleSort,
        },
        {
          title: "Selection Sort",
          description:
            "Selection Sort is a basic sorting algorithm that divides the input list into two parts: a sorted and an unsorted region. It repeatedly selects the smallest element from the unsorted region and swaps it with the first element of the unsorted region.",
          pageLink: "/sorting/selectionsort",
          image: assets.Sorting.SelectionSort,
        },
        {
          title: "Insertion Sort",
          description:
            "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It takes each element from the unsorted part of the array and inserts it into its correct position in the already sorted part.",
          pageLink: "/sorting/insertionsort",
          image: assets.Sorting.InsertionSort,
        },
      ],
    },
  ];
  return (
    <div className="container flex flex-col gap-4 my-4">
      {subAnimations.map((anims) => (
        <div key={anims.title} className="my-4">
          <h1 className="md:text-2xl text-xl my-4">{anims.title}</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {anims.elements.map((elem) => (
              <SubAnimationCards {...elem} key={elem.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
