import { Loader } from "lucide-react";
import React, { FC } from "react";

interface ILoading {}

const loading: FC<ILoading> = () => {
  return <Loader className="animate-spin mx-auto mt-[20vh]" size={200} />;
};

export default loading;
