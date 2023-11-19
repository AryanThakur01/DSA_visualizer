import { FC } from "react";
import { cn } from "@/lib/utils";

export interface IBinaryTreeStructure {
  nodeVals: INodeVals;
}
export interface INodeVals {
  value: number;
  isActive?: boolean;
  isSelected?: boolean;
  nodeL?: INodeVals;
  nodeR?: INodeVals;
}
const BinaryTreeStructure: FC<IBinaryTreeStructure> = ({ nodeVals }) => {
  return (
    <>
      <div className="bg-opacity-100 py-[-3rem] flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <div className={cn( "h-20 w-[1px] relative top-10", nodeVals.nodeL && "bg-foreground",)} />
          <hr className={cn( "w-[calc(25%-1rem)] border-transparent", nodeVals?.nodeL && "border-foreground")} />
          <p className={cn( "border border-foreground text-center w-12 self-center rounded", nodeVals.isActive ? "border-destructive text-destructive bg-destructive/10 font-bold" : "", nodeVals.isSelected ? "border-success text-success bg-success/10 font-bold" : "")} >
            {nodeVals.value !== undefined ? nodeVals.value : " "}
          </p>
          <hr className={cn( "w-[calc(25%-1rem)] border-transparent", nodeVals?.nodeR && "border-foreground")} />
          <div className={cn( "h-20 w-[1px] relative top-10", nodeVals.nodeR && "bg-foreground")} />
        </div>
        <div className="grid grid-cols-2 justify-center">
          {nodeVals.nodeL ? (
            <BinaryTreeStructure nodeVals={nodeVals.nodeL} />
          ) : (
            <div className="w-20" />
          )}
          {nodeVals.nodeR ? (
            <BinaryTreeStructure nodeVals={nodeVals.nodeR} />
          ) : (
            <div className="w-20" />
          )}
        </div>
      </div>
    </>
  );
};

export default BinaryTreeStructure;
