import MiscellaneousIndex from "@/components/dsComps/misc/Miscellaneous";
import TowerOfHanoi from "@/components/dsComps/misc/toh/TowerOfHanoi";
import { FC } from "react";

interface ITOH {}

const page: FC<ITOH> = () => {
  return <TowerOfHanoi />;
};

export default page;
