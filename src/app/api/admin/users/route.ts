import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const auth = cookieStore.get("admin-auth");

    if (!auth || auth.value !== "authenticated") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get all users
    const users = await prisma.waitlistUser.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalCount = users.length;

    return NextResponse.json({
      count: totalCount,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
