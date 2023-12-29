import { config } from "@/utils/auth";
import NextAuth from "next-auth";
// import { options } from "./options";
//
// const handler = NextAuth(options);
const handler = NextAuth(config);

export { handler as GET, handler as POST };
