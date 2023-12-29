import Link from "next/link";
import { FC } from "react";
import ThemeSelector, { SessionDropDown } from "./NavContents";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

interface INav {}

const Nav: FC<INav> = async () => {
  const session = await getServerSession(options);
  return (
    <>
      <div className="container h-10 flex items-center justify-between">
        <Link href="/" className="font-bold">
          dsa/visualizer
        </Link>
        <div className="flex gap-2">
          <ThemeSelector />
          {!session ? (
            <Link
              href="/api/auth/signin"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Login
            </Link>
          ) : (
            <SessionDropDown>
              <img
                src={session.user?.image || ""}
                alt={session.user?.name || ""}
                className="h-8 rounded-full cursor-pointer"
              />
            </SessionDropDown>
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;
