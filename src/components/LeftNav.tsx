// DATABASE_URL="postgresql://postgres:2008@localhost:5432/dsa?schema=dsaSchema"
"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

interface ILeftNav {
  children?: ReactNode;
}
const LeftNav: FC<ILeftNav> = ({ children }) => {
  return (
    <>
      {/* DESKTOP */}
      <aside className="aside__nav">
        <div className="aside__overlay" />
        <LeftNavContent />
      </aside>
      {/* MOBILE */}
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="min-w-fit border-r-border" side="left">
          <SheetHeader className="text-left">
            <SheetTitle>
              <Link href="/" className="font-bold">
                dsa/visualizer
              </Link>
            </SheetTitle>
            <hr className="border-border" />
            <LeftNavContent />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

const LeftNavContent = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-background h-full w-full p-5">
        <h2 className="text-xl font-bold my-3">Data Structures</h2>
        <div className="flex flex-col">
          <Link
            href="/stack"
            className={pathname === "/stack" ? "text-primary" : ""}
          >
            Stack
          </Link>

          <Link
            href="/linkedlist"
            className={pathname?.match("/linkedlist") ? "text-primary" : ""}
          >
            Linked List
          </Link>
          {/* LinkedList */}
          <Link
            href="/binarytree"
            className={pathname === "/binarytree" ? "text-primary" : ""}
          >
            Binary Tree
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="p-0 hover:no-underline font-light">
                <Link
                  href="/heaps"
                  className={pathname?.match("/heaps/*") ? "text-primary" : ""}
                >
                  Heap
                </Link>
              </AccordionTrigger>
              <AccordionContent className="ml-4 pl-2 font-extralight">
                <ul>
                  <li className="my-2">
                    <Link
                      href="/heaps/minheap"
                      className={
                        pathname === "/heaps/minheap" ? "text-primary" : ""
                      }
                    >
                      Min Heap
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      href="/heaps/maxheap"
                      className={
                        pathname === "/heaps/maxheap" ? "text-primary" : ""
                      }
                    >
                      Max Heap
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="p-0 hover:no-underline font-light">
                <Link
                  href="/misc"
                  className={pathname?.match("/misc/*") ? "text-primary" : ""}
                >
                  Miscellaneous
                </Link>
              </AccordionTrigger>
              <AccordionContent className="ml-4 pl-2 font-extralight">
                <ul>
                  <li className="my-2">
                    <Link
                      href="/misc/toh"
                      className={pathname === "/misc/toh" ? "text-primary" : ""}
                    >
                      Tower Of Hanoi
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <h2 className="text-xl font-bold my-3">Algorithms</h2>
        <Link
          href="/binarysearch"
          className={pathname === "/binarysearch" ? "text-primary" : ""}
        >
          Binary Search
        </Link>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="p-0 hover:no-underline font-light">
              <Link
                href="/sorting"
                className={pathname?.match("/sorting/*") ? "text-primary" : ""}
              >
                Sorting
              </Link>
            </AccordionTrigger>
            <AccordionContent className="ml-4 pl-2 font-extralight">
              <ul>
                <li className="my-2">
                  <Link
                    href="/sorting/bubblesort"
                    className={
                      pathname === "/sorting/bubblesort" ? "text-primary" : ""
                    }
                  >
                    Bubble Sort
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/sorting/selectionsort"
                    className={
                      pathname === "/sorting/selectionsort"
                        ? "text-primary"
                        : ""
                    }
                  >
                    Selection Sort
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/sorting/insertionsort"
                    className={
                      pathname === "/sorting/insertionsort"
                        ? "text-primary"
                        : ""
                    }
                  >
                    Insertion Sort
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
export default LeftNav;
