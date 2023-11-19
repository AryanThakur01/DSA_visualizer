"use client";
import React, { FC, useState } from "react";

interface IHauffmanEncoding {}
interface INodeVals {
  value: number;
  isActive?: boolean;
  isSelected?: boolean;
  nodeL?: INodeVals;
  nodeR?: INodeVals;
}

const HauffmanEncodingAnimation: FC<IHauffmanEncoding> = () => {
  // prettier-ignore
  const [nodeVals, setNodeVals] = useState<INodeVals>({ value: 1, nodeL: { value: 2, nodeL: { value: 3, nodeL: { value: 4 }, nodeR: {value:13}  }, nodeR: { value: 6  }, }, nodeR: { value: 9, nodeL: { value: 10, nodeR: { value: 12 } }, }, });

  return (
    <div className="min-h-[25rem] md:w-[72vw] overflow-scroll border border-border flex flex-col items-start mt-10"></div>
  );
};

export default HauffmanEncodingAnimation;
