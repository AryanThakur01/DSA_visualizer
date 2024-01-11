import { Loader2 } from "lucide-react";
import React, { FC } from "react";

interface ILoading {}

const loading: FC<ILoading> = () => {
  return <Loader2 className="animate-spin mx-auto mt-[20vh]" size={200} />;
};

export default loading;
