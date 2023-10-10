import Link from "next/link";
import React from "react";

type Props = {};

export default function LeftNav({}: Props) {
  return (
    <>
      <h2 className="font-bold">Data Structures</h2>
      <Link href="/stack">Stack</Link>
    </>
  );
}
