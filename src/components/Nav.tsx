import Link from "next/link";
import { FC } from "react";
import ThemeSelector from "./NavContents";

interface INav {}

const Nav: FC<INav> = () => {
  return (
    <>
      <div className="container h-10 flex items-center justify-between">
        <Link href="/" className="font-bold">
          dsa/visualizer
        </Link>
        <ThemeSelector />
      </div>
    </>
  );
};
export default Nav;
