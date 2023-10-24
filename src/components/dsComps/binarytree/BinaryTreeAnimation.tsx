"use client";

import { FC } from "react";

interface IBinaryTree {}

const BinaryTreeAnimation: FC<IBinaryTree> = () => {
  return (
    <div className="h-72 w-[75vw] overflow-scroll border border-border flex flex-col items-center p-3">
      <div className="border border-border bg-opacity-100 py-[-3rem] p-2 flex flex-col gap-3">
        {/* Head */}
        <p className="border text-center w-20 self-center">1</p>
        <div className="flex gap-3">
          {/* Node A */}
          <div className="border border-border p-2 flex flex-col gap-3">
            <p className="border text-center w-20 self-center">2</p>
            <div className="flex gap-3">
              <div className="border border-border p-2 flex flex-col gap-3">
                {/* Node AL */}
                <p className="border text-center w-20 self-center">3</p>
                <div className="flex gap-3">
                  <div className="border border-border p-2 flex flex-col gap-3">
                    {/* Node AL */}
                    <p className="border text-center w-20 self-center">3</p>
                  </div>
                  <div className="border border-border p-2 flex flex-col gap-3">
                    {/* Node RL */}
                    <p className="border text-center w-20 self-center">4</p>
                  </div>
                </div>
              </div>
              <div className="border border-border p-2 flex flex-col gap-3">
                {/* Node RL */}
                <p className="border text-center w-20 self-center">4</p>
              </div>
            </div>
          </div>
          {/* Node B */}
          <div className="border border-border p-2 flex flex-col gap-3">
            <p className="border text-center w-20 self-center">5</p>
            <div className="flex gap-3">
              <div className="border border-border p-2 flex flex-col gap-3">
                {/* Node AL */}
                <p className="border text-center w-20 self-center">6</p>
              </div>
              <div className="border border-border p-2 flex flex-col gap-3">
                {/* Node RL */}
                <p className="border text-center w-20 self-center">7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTreeAnimation;
