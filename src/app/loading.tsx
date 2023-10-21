import { FC } from "react";

type ILoading = {};

const Loading: FC<ILoading> = () => {
  return (
    <div className="w-full h-[50vh] flex gap-1 justify-center items-center">
      <div className="animate-[bounce_0.5s_ease-in_infinite] bg-primary h-6 w-6 rounded-full" />
      <div className="animate-[bounce_0.6s_ease-in_infinite] bg-primary h-6 w-6 rounded-full" />
      <div className="animate-[bounce_0.7s_ease-in_infinite] bg-primary h-6 w-6 rounded-full" />
      <div className="animate-[bounce_0.6s_ease-in_infinite] bg-primary h-6 w-6 rounded-full" />
      <div className="animate-[bounce_0.7s_ease-in_infinite] bg-primary h-6 w-6 rounded-full" />
    </div>
  );
};

export default Loading;
