import LeftNav from "@/components/LeftNav";
import { FC, ReactNode } from "react";

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
