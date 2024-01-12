import { NextRequest, NextResponse } from "next/server";
import { JWTDecodeParams, decode } from "next-auth/jwt";
import { prisma } from "@/utils/prismaInstance";

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

// Get A Review
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const visualName = url.searchParams.get("visualName");
    const res = await prisma.reviews.findMany({
      include: { writer: true },
      where: {
        visualName: visualName || "",
      },
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

// Create A Review
export const POST = async (req: NextRequest) => {
  try {
    const payload = await cookieToPayload(req);
    if (!payload) throw new Error("Session Not Found");
    const data = await req.json();
    const res = await prisma.reviews.create({
      data: { ...data, writerId: payload.sub },
    });
    return new NextResponse(JSON.stringify(res));
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
