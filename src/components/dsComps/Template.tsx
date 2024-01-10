import React, { FC, ReactNode } from "react";
import StarSelector from "../StarSelector";
import { auth } from "@/utils/auth";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { JWTDecodeParams, decode } from "next-auth/jwt";
import Reviews from "../Reviews";

interface IDsTemplate {
  title: string;
  icon?: ReactNode;
  intro: string;
  children: ReactNode;
}

const prisma = new PrismaClient();
const Template: FC<IDsTemplate> = async ({ title, icon, intro, children }) => {
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
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl flex flex-row-reverse items-center gap-2 w-fit my-8">
            {title}
            {icon}
          </h1>
          <StarSelector title={title} isStarred={starred} />
        </div>
        <p>{intro}</p>
      </article>
      {children}
      <LLSectionTemplate>
        <Reviews title={title} />
      </LLSectionTemplate>
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
