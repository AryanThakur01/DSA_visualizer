"use client";
import React, { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface INextAuthSessionProvider {
  children: ReactNode;
}

const NextAuthSessionProvider: FC<INextAuthSessionProvider> = ({
  children,
}) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};

export default NextAuthSessionProvider;
