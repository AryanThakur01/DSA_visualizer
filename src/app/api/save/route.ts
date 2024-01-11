import { NextRequest, NextResponse } from "next/server";
import { JWTDecodeParams, decode } from "next-auth/jwt";
import { prisma } from "@/utils/prismaInstance";

const cookieToPayload = async (req: NextRequest) => {
  const cookie = req.cookies.get(
    process.env.NODE_ENV === "production"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token",
  );
  const key: JWTDecodeParams = {
    token: cookie?.value,
    secret: process.env.NEXTAUTH_SECRET || "",
  };
  return await decode(key);
};

export const GET = async (req: NextRequest) => {
  try {
    const payload = await cookieToPayload(req);
    const res = await prisma.starredVisualization.findMany({
      where: {
        userId: payload?.sub,
      },
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const payload = await cookieToPayload(req);
    const data = await req.json();
    const res = await prisma.starredVisualization.create({
      data: { ...data, userId: payload?.sub },
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const payload = await cookieToPayload(req);
    const visualName = await req.text();
    const res = await prisma.starredVisualization.deleteMany({
      where: {
        visualName,
        userId: payload?.sub || "",
      },
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
