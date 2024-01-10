import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { JWTDecodeParams, decode } from "next-auth/jwt";

const prisma = new PrismaClient();

const cookieToPayload = async (req: NextRequest) => {
  const cookie = req.cookies.get(
    process.env.NODE_ENV === "production"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token",
  );
  if (!cookie) return;
  const key: JWTDecodeParams = {
    token: cookie?.value,
    secret: process.env.NEXTAUTH_SECRET || "",
  };
  return await decode(key);
};

// Create A Review
export const POST = async (req: NextRequest) => {
  console.log("============== WRITE REVIEW ===================");
  try {
    const payload = await cookieToPayload(req);
    if (!payload) throw new Error("Session Not Found");
    const data = await req.json();
    console.log({ ...data, writerId: payload?.sub });
    const res = await prisma.reviews.create({
      data: { ...data, writerId: payload.sub },
    });
    console.log(res);
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
