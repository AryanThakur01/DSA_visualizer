import React, { FC, ReactNode } from "react";
import StarSelector from "../StarSelector";
import { auth } from "@/utils/auth";
import { prisma } from "@/utils/prismaInstance";
import { cookies } from "next/headers";
import { JWTDecodeParams, decode } from "next-auth/jwt";
import Reviews from "../Reviews";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IContentList {
  id: string;
  title: string;
  paras?: Array<string>;
  list?: Array<{ title: string; data: string }>;
}
interface IDsTemplate {
  title: string;
  icon?: ReactNode;
  intro: string;
  children: ReactNode;
  contentList?: Array<IContentList>;
}

const Template: FC<IDsTemplate> = async ({
  title,
  icon,
  intro,
  children,
  contentList,
}) => {
  const session = await auth();
  let starred = false;

  await (async () => {
    const cookie = cookies().get(
      process.env.NODE_ENV === "development"
        ? "next-auth.session-token"
        : "__Secure-next-auth.session-token",
    );
    if (!session || !cookie || !process.env.NEXTAUTH_SECRET) return;
    const key: JWTDecodeParams = {
      token: cookie.value,
      secret: process.env.NEXTAUTH_SECRET,
    };
    const user = await decode(key);
    if (!user) return;

    const searching = await prisma.starredVisualization.findFirst({
      where: {
        visualName: title,
        userId: user.sub || "",
      },
    });
    if (searching) starred = true;
  })();
  return (
    <>
      <article className="md:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-xl md:text-3xl flex flex-row-reverse items-center gap-2 w-fit">
            {title}
            {icon}
          </h1>
          <StarSelector title={title} isStarred={starred} />
        </div>
        <p>{intro}</p>
      </article>
      {contentList?.map((cnt) => (
        <LLSectionTemplate key={cnt.id} id={cnt.id} className="pt-8">
          <h2 className="mb-4 text-lg md:text-2xl font-semibold border-t-border border-t-2 pt-8">
            <Link className="hover:text-primary" href={"#" + cnt.id}>
              {cnt.title}
            </Link>
          </h2>
          {cnt.paras?.map((par, i) => (
            <p className="mb-2" key={"Para-" + i}>
              {par}
            </p>
          ))}
          {cnt.list && (
            <ul className="list-decimal pl-6 my-3">
              {cnt.list.map((elem, i) => (
                <li key={"stack-" + i}>
                  <span className="min-w-[14rem] font-bold pr-3">
                    {elem.title}:
                  </span>
                  <span className="text-foreground/60">{elem.data}</span>
                </li>
              ))}
            </ul>
          )}
        </LLSectionTemplate>
      ))}
      {children}
      <hr className="border-t border-border mt-8" />
      <LLSectionTemplate className="pt-8">
        <Reviews title={title} />
      </LLSectionTemplate>
    </>
  );
};

interface ILLSectionTemplate {
  subHeader?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const LLSectionTemplate: FC<ILLSectionTemplate> = ({
  subHeader,
  children,
  id,
  className,
}) => {
  return (
    <section className={cn("md:px-8", className)} id={id}>
      {subHeader && (
        <h2 className="font-bold text-xl flex flex-row-reverse items-center gap-2 w-fit my-2">
          {subHeader}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Template;
export { LLSectionTemplate };
