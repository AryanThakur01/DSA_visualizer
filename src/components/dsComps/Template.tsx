import React, { FC, ReactNode } from "react";

interface IDsTemplate {
  title: string;
  icon?: ReactNode;
  intro: string;
  children: ReactNode;
}

const Template: FC<IDsTemplate> = ({ title, icon, intro, children }) => {
  return (
    <>
      <article className="md:px-8">
        <h1 className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit my-8">
          {title}
          {icon}
        </h1>
        <p>{intro}</p>
      </article>
      {children}
    </>
  );
};

interface ILLSectionTemplate {
  subHeader?: string;
  children: ReactNode;
  id?: string;
}

const LLSectionTemplate: FC<ILLSectionTemplate> = ({
  subHeader,
  children,
  id,
}) => {
  return (
    <section className="md:px-8" id={id}>
      {subHeader && (
        <h2 className="font-bold text-xl flex flex-row-reverse items-center gap-2 w-fit my-2">
          {subHeader}
        </h2>
      )}
      {children}
      <hr className="border-border my-16" />
    </section>
  );
};

export default Template;
export { LLSectionTemplate };
