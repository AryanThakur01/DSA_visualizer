import { FC } from "react";
import Template, { LLSectionTemplate } from "../../Template";
import TOHAnimation from "./TOHAnimation";

interface ITOH {}

const TowerOfHanoi: FC<ITOH> = () => {
  return (
    <Template
      title="Tower Of Hanoi"
      intro="Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. The objective of the puzzle is to move the entire stack to another rod (here considered C),"
    >
      <LLSectionTemplate>
        <TOHAnimation />
      </LLSectionTemplate>
    </Template>
  );
};

export default TowerOfHanoi;
