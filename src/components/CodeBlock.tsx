import Link from "next/link";
import React, { ReactNode } from "react";
import { FC } from "react";
import { LLSectionTemplate } from "./dsComps/Template";

interface ICprogramme {
  children: ReactNode;
}

const CodeBlock: FC<ICprogramme> = ({ children }) => {
  return (
    <>
      {/* <Link href="https://github.com/AryanThakur01/DataStructureAndAlgorithm/blob/main/linkedList/linkedList.cc"> */}
      {/*   Github */}
      {/* </Link> */}
      <LLSectionTemplate>
        <div className="border border-border rounded-md px-2 shadow-sm bg-black">
          <pre className="max-h-[80vh] max-w-full overflow-scroll">
            {children}
          </pre>
        </div>
      </LLSectionTemplate>
    </>
  );
};

export default CodeBlock;
