import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
};

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = options satisfies NextAuthOptions;

// Use it in server contexts
export const auth = (
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) => {
  return getServerSession(...args, config);
};
