import { FC } from "react";
import Template, { LLSectionTemplate } from "../../Template";
import TOHAnimation from "./TOHAnimation";
import { ArrowUpNarrowWide } from "lucide-react";

interface ITOH {}

const TowerOfHanoi: FC<ITOH> = () => {
  const contentList = [
    {
      id: "what-is-tower-of-hanoi",
      title: "What is Tower of Hanoi?",
      paras: [
        "The Tower of Hanoi is a classic mathematical puzzle consisting of three rods and a number of disks of different sizes. The objective is to move the entire stack of disks from one rod to another, obeying the following simple rules:",
        "- Only one disk can be moved at a time.",
        "- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.",
        "- No disk may be placed on top of a smaller disk.",
      ],
    },
  ];
  return (
    <Template
      title="Tower Of Hanoi"
      intro="Unraveling the Puzzle, One Move at a Time!"
      icon={<ArrowUpNarrowWide />}
      contentList={contentList}
    >
      <LLSectionTemplate className="my-4">
        <TOHAnimation />
      </LLSectionTemplate>
    </Template>
  );
};

export default TowerOfHanoi;
