import LeftNav from "@/components/LeftNav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { FC, ReactNode } from "react";

interface IDsaLayout {
  children: ReactNode;
}
const Layout: FC<IDsaLayout> = ({ children }) => {
  return (
    <>
      <LeftNav>
        <MenuIcon
          className={cn(
            buttonVariants({ variant: "link" }),
            "mx-2 p-1 fixed z-50 md:hidden top-2 right-0 cursor-pointer",
          )}
        />
      </LeftNav>
      <div className="w-full py-8 container">{children}</div>
    </>
  );
};
export default Layout;
