import Link from "next/link";
import React from "react";

type Props = {};

export default function LeftNav({}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Data Structures</h2>
      <div className="flex flex-col">
        <Link href="/stack">Stack</Link>
        <Link href="/linkedlist">Linked List</Link>
      </div>
    </>
  );
}
