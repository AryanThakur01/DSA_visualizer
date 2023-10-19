"use client";
import { cn } from "@/lib/utils";
import {
  Dispatch,
  FC,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import "./tohAnims.scss";

interface ITOHAnim {}
interface IDiscProperties {
  width: string;
  translation: "out" | "none" | "in";
  visible?: boolean;
  ref?: LegacyRef<HTMLLIElement>;
}
interface IDiscsContainer {
  container: string;
  discs?: IDiscProperties[];
}

const TOHAnimation: FC<ITOHAnim> = () => {
  const [from, setFrom] = useState<IDiscProperties[]>([
    {
      width: "90%",
      translation: "none",
      visible: true,
      ref: useRef<HTMLLIElement>(null),
    },
    {
      width: "100%",
      translation: "none",
      visible: true,
      ref: useRef<HTMLLIElement>(null),
    },
  ]);
  const [to, setTo] = useState<IDiscProperties[]>([]);
  const [aux, setAux] = useState<IDiscProperties[]>([]);
  const TohShift = (
    n: number,
    from: IDiscProperties[],
    to: IDiscProperties[],
    aux: IDiscProperties[],
    setFrom: Dispatch<SetStateAction<IDiscProperties[]>>,
    setTo: Dispatch<SetStateAction<IDiscProperties[]>>,
    setAux: Dispatch<SetStateAction<IDiscProperties[]>>,
  ) => {
    if (n === 0) return;
    let step = 0;
    const int = setInterval(
      () => {
        switch (step) {
          case 0:
            TohShift(n - 1, from, aux, to, setFrom, setAux, setTo);
            break;
          case 1:
            let tempFrom: IDiscProperties[] = from;
            if (tempFrom.length !== 0 && tempFrom[n - 1].ref) {
              // tempFrom[n-1].ref?.current
            }
            break;
          case 2:
            TohShift(n - 1, aux, to, from, setAux, setTo, setFrom);
            clearInterval(int);
            break;
        }
        step++;
      },
      1000 * (n - 1),
    );
  };
  useEffect(() => {
    TohShift(2, from, to, aux, setFrom, setTo, setAux);
  }, []);
  return (
    <div className="overflow-x-scroll md:w-full border border-border pt-10 mt-5 px-2 flex flex-col gap-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <DiscsContainer container="A" discs={from} key="cntr-from" />
        <DiscsContainer container="B" discs={to} key="cntr-to" />
        <DiscsContainer container="C" discs={aux} key="cntr-aux" />
      </div>
      {/* <Button className="w-fit self-center rounded-full my-3"> */}
      {/*   <Play /> */}
      {/* </Button> */}
    </div>
  );
};
const DiscsContainer: FC<IDiscsContainer> = ({ discs, container }) => {
  const colors = ["bg-primary", "bg-destructive", "bg-success"];
  return (
    <div className="w-20 h-20 relative flex flex-col justify-end items-center">
      <ul className="w-[80%] my-[1px] z-10 flex flex-col items-center">
        {discs?.map((disc, index) => (
          <li
            ref={disc.ref}
            id={container + "-" + index}
            key={container + "-" + index}
            className={cn(
              "h-2 rounded-full bg-white border border-transparent shadow",
              colors[Math.floor(index % 3)],
              disc.translation === "out" && "disc-out",
              disc.translation === "in" && "disc-in",
              !disc.visible && "hidden",
            )}
            style={{
              width: disc.width,
            }}
          />
        ))}
      </ul>
      <div className="w-[1px] h-full bg-muted-foreground absolute" />
      <div className="w-full h-1 bg-muted-foreground rounded-full" />
    </div>
  );
};

export default TOHAnimation;
