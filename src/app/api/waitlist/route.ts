import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/email";
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
  platform: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email, firstName, lastName, phone, state, ageRange, sportsbooks, otherSportsbook, platform } =
      WaitlistSchema.parse(json);

    const existing = await prisma.waitlistUser.findUnique({ where: { email } });

    if (!existing) {
      await prisma.waitlistUser.create({
        data: {
          email,
          firstName,
          lastName,
          phone,
          state,
          ageRange,
          sportsbooks,
          otherSportsbook,
          platform: platform ?? "android",
        },
      });
    }

    // Send welcome email - always send, even if user already exists
    const emailResult = await sendWelcomeEmail(email, firstName || existing?.firstName || null);
    if (!emailResult?.success) {
      console.error(`Failed to send welcome email to ${email}: ${emailResult?.error}`);
    }

    return NextResponse.json({ ok: true }, { status: existing ? 200 : 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error("Error in POST /api/waitlist:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
