import React, { FC, ReactNode } from "react";
import LeftNav from "@/components/LeftNav";

interface IDsaLayout {
  children: ReactNode;
}
const Layout: FC<IDsaLayout> = ({ children }) => {
  return (
    <>
      <aside>
        <LeftNav />
      </aside>
      <div className="w-full py-8 container">{children}</div>
    </>
  );
};
export default Layout;
