import React, { FC, ReactNode } from "react";

interface IDsTemplate {
  title: string;
  icon: ReactNode;
  intro: string;
  // code: ReactNode;
  children: ReactNode;
}

const Template: FC<IDsTemplate> = ({ title, icon, intro, children }) => {
  return (
    <>
      <article>
        <h1
          id="Stack"
          className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit"
        >
          {title}
          {icon}
        </h1>
        <hr className="border-border mt-2 mb-10" />
        <p>{intro}</p>
      </article>
      {children}
    </>
  );
};

export default Template;
