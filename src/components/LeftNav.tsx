"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface ILeftNav {}
const LeftNav: FC<ILeftNav> = () => {
  const asideVis = () => {
    let asideElem: HTMLElement = document.getElementsByTagName("aside")[0];
    asideElem.classList.toggle("aside__nav-open");
  };
  const closeAside = () => {
    let asideElem: HTMLElement = document.getElementsByTagName("aside")[0];
    asideElem.classList.toggle("aside__nav-open");
  };
  const pathname = usePathname();
  return (
    <>
      <Button
        className="mx-2 p-1 absolute inline z-50 top-2 right-0 md:hidden"
        variant="link"
        onClick={() => {
          asideVis();
        }}
      >
        <MenuIcon />
      </Button>
      <aside className="aside__nav">
        <div
          className="aside__overlay"
          onClick={() => {
            closeAside();
          }}
        />
        <div className="bg-background h-full w-full p-5">
          <h2 className="text-xl font-bold my-3">Data Structures</h2>
          <div className="flex flex-col">
            <Link
              href="/stack"
              className={pathname === "/stack" ? "text-primary" : ""}
            >
              Stack
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="p-0 hover:no-underline my-2 font-light">
                  LinkedList
                </AccordionTrigger>
                <AccordionContent className="ml-4 pl-2 font-extralight">
                  <ul>
                    <li className="my-2">
                      <Link
                        href="/linearll"
                        className={
                          pathname === "/linearll" ? "text-primary" : ""
                        }
                      >
                        Singly Linked Linear
                      </Link>
                    </li>
                    <li className="my-2">
                      <Link
                        href="/linkedlist"
                        className={
                          pathname === "/circularll" ? "text-primary" : ""
                        }
                      >
                        Singly Linked Circular
                      </Link>
                    </li>
                    <li className="my-2">
                      <Link
                        href="/linkedlist"
                        className={
                          pathname === "/doublyll" ? "text-primary" : ""
                        }
                      >
                        Doubly Linked Linear
                      </Link>
                    </li>
                    <li className="my-2">
                      <Link
                        href="/linkedlist"
                        className={
                          pathname === "/doublycll" ? "text-primary" : ""
                        }
                      >
                        Doubly Linked Circular
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </aside>
    </>
  );
};
export default LeftNav;
