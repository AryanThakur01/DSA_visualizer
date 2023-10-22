"use client";
import { cn } from "@/lib/utils";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import "./tohAnims.scss";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ITOHAnim {}
interface IDiscProperties {
  width: string;
  translation: "out" | "none" | "in";
  visible?: boolean;
  color: string;
}
interface IDiscsContainer {
  container: string;
  discs?: IDiscProperties[];
}

const TOHAnimation: FC<ITOHAnim> = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [discCount, setDiscCount] = useState<string>("3");
  const [from, setFrom] = useState<IDiscProperties[]>([]);
  const [to, setTo] = useState<IDiscProperties[]>([]);
  const [aux, setAux] = useState<IDiscProperties[]>([]);
  const animation_ms = 2000;
  const discSetter = () => {
    if (!discCount) return;
    let count = Number(discCount);
    let colors = ["bg-success", "bg-destructive", "bg-primary"];
    let tempFrom: IDiscProperties[] = [];
    let tempTo: IDiscProperties[] = [];
    let tempAux: IDiscProperties[] = [];
    let tempDisc: IDiscProperties = {
      width: "100%",
      color: "bg-primary",
      translation: "none",
      visible: false,
    };
    for (let i = 0; i < count; i++) {
      tempDisc.color = colors[i % 3];
      tempDisc.width = 100 - i * 10 + "%";
      tempDisc.translation = "none";
      tempFrom = [{ ...tempDisc, visible: true }, ...tempFrom];
      tempTo = [{ ...tempDisc, visible: false }, ...tempTo];
      tempAux = [{ ...tempDisc, visible: false }, ...tempAux];
    }
    setFrom(tempFrom);
    setTo(tempTo);
    setAux(tempAux);
  };
  const towerUpdates = (
    i: number,
    from: IDiscProperties[],
    to: IDiscProperties[],
    setFrom: Dispatch<SetStateAction<IDiscProperties[]>>,
    setTo: Dispatch<SetStateAction<IDiscProperties[]>>,
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let tempFrm = [...from];
        let tempTo = [...to];
        tempFrm[i].translation = "out";
        tempTo[i].visible = true;
        tempTo[i].translation = "in";
        setFrom(tempFrm);
        setTo(tempTo);
        setTimeout(() => {
          tempFrm[i].visible = false;
          tempTo[i].translation = "none";
          setFrom(tempFrm);
          resolve("Success");
          return;
        }, 10);
      }, animation_ms);
    });
  };

  const TohShift = async (
    n: number,
    from: IDiscProperties[],
    to: IDiscProperties[],
    aux: IDiscProperties[],
    setFrom: Dispatch<SetStateAction<IDiscProperties[]>>,
    setTo: Dispatch<SetStateAction<IDiscProperties[]>>,
    setAux: Dispatch<SetStateAction<IDiscProperties[]>>,
  ) => {
    if (n === 0) return;
    try {
      await TohShift(n - 1, from, aux, to, setFrom, setAux, setTo);
      await towerUpdates(n - 1, from, to, setFrom, setTo);
      await TohShift(n - 1, aux, to, from, setAux, setTo, setFrom);
    } catch (error) {
      return;
    }
  };
  const playButtonHandler = async () => {
    let count = Number(discCount);
    setPlaying(true);
    await TohShift(count, from, to, aux, setFrom, setTo, setAux);
    setTimeout(() => {
      setPlaying(false);
      setReset(true);
    }, animation_ms);
  };
  const resetHandler = () => {
    setPlaying(false);
    setReset(false);
    discSetter();
  };

  useEffect(() => {
    discSetter();
  }, [discCount]);

  return (
    <div className="overflow-x-scroll md:w-full border border-border pt-10 mt-5 px-2 flex flex-col gap-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <DiscsContainer container="A" discs={from} key="cntr-from" />
        <DiscsContainer container="B" discs={to} key="cntr-to" />
        <DiscsContainer container="C" discs={aux} key="cntr-aux" />
      </div>
      <div className="flex justify-center gap-3 items-center mb-3">
        {!playing && (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              Discs
            </DropdownMenuTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuContent className="w-56 border-border">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={discCount}
                onValueChange={setDiscCount}
              >
                <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4">4</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="6">6</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {reset ? (
          <Button
            className="h-7 w-24 self-center"
            onClick={resetHandler}
            variant="destructive"
          >
            Reset
          </Button>
        ) : (
          <Button
            className="h-7 w-24 self-center"
            onClick={playButtonHandler}
            disabled={playing}
            variant={"secondary"}
          >
            Play
          </Button>
        )}
      </div>
    </div>
  );
};
const DiscsContainer: FC<IDiscsContainer> = ({ discs, container }) => {
  return (
    <div>
      <div className="w-20 h-20 relative flex flex-col justify-end items-center">
        <ul className="w-[80%] my-[1px] z-10 flex flex-col items-center">
          {discs?.map((disc, index) => (
            <li
              id={container + "-" + index}
              key={container + "-" + index}
              className={cn(
                "h-2 rounded-full bg-white border border-transparent shadow",
                disc.color,
                disc.translation === "out" && "disc-out",
                disc.translation === "in" && "disc-in",
              )}
              style={{
                width: disc.width,
                display: disc.visible ? "block" : "none",
              }}
            />
          ))}
        </ul>
        <div className="w-[1px] h-full bg-muted-foreground absolute" />
        <div className="w-full h-1 bg-muted-foreground rounded-full" />
      </div>
      <p className="text-center">{container}</p>
    </div>
  );
};

export default TOHAnimation;
