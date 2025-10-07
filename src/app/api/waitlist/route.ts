import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const WaitlistSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  state: z.string().optional(),
  ageRange: z.string().optional(),
  sportsbooks: z.array(z.string()).optional(),
  otherSportsbook: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email, firstName, lastName, phone, state, ageRange, sportsbooks, otherSportsbook } = WaitlistSchema.parse(json);

    const existing = await prisma.waitlistUser.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    await prisma.waitlistUser.create({
      data: { email, firstName, lastName, phone, state, ageRange, sportsbooks, otherSportsbook },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
