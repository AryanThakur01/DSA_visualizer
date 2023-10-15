import Link from "next/link";
import { FC } from "react";

interface INav {}

const Nav: FC<INav> = () => {
  return (
    <>
      <div className="container h-10 flex items-center">
        <Link href="/" className="font-bold">
          dsa/visualizer
        </Link>
      </div>
    </>
  );
};
export default Nav;
