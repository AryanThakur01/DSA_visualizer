import SubAnimationCards from "@/components/SubAnimationCards";
import { FC } from "react";

interface IMiscellaneous {}

const page: FC<IMiscellaneous> = () => {
  const subAnimations = [
    {
      title: "Tower Of Hanoi",
      description:
        "The Tower of Hanoi is a classic puzzle with three rods and disks of different sizes. The goal is to move the entire stack from one rod to another, following the rule of placing smaller disks on top of larger ones, using only one disk at a time. This seemingly simple task hides a captivating algorithmic challenge. ",
      pageLink: "/misc/toh",
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
