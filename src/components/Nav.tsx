import Link from "next/link";
import { FC } from "react";
import ThemeSelector, { SessionDropDown } from "./NavContents";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { config } from "@/utils/auth";
import Image from "next/image";

interface INav {}

const Nav: FC<INav> = async () => {
  const session = await getServerSession(config);
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
              <Image
                width={32}
                height={24}
                src={session.user?.image || ""}
                alt={(session.user?.name || "")[0]}
                className="rounded-full cursor-pointer flex items-center text-xl"
              />
            </SessionDropDown>
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;
