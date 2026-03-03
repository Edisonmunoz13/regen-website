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
});

export async function POST(request: Request) {
  console.log("🚀 POST /api/waitlist called");
  
  try {
    const json = await request.json();
    console.log("📦 Request body received:", { email: json.email, hasFirstName: !!json.firstName });
    
    const { email, firstName, lastName, phone, state, ageRange, sportsbooks, otherSportsbook } = WaitlistSchema.parse(json);
    console.log("✅ Schema validation passed");

    const existing = await prisma.waitlistUser.findUnique({ where: { email } });
    let user;
    
    if (existing) {
      console.log(`⚠️ User already exists: ${email}`);
      user = existing;
    } else {
      console.log(`📝 Creating new user: ${email}`);
      user = await prisma.waitlistUser.create({
        data: { email, firstName, lastName, phone, state, ageRange, sportsbooks, otherSportsbook },
      });
      console.log(`✅ User created successfully: ${user.id}`);
    }

    console.log(`🔍 SMTP Config Check:`);
    console.log(`   SMTP_USER: ${process.env.SMTP_USER ? '✅ SET' : '❌ NOT SET'}`);
    console.log(`   SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? '✅ SET' : '❌ NOT SET'}`);
    console.log(`   EMAIL_FROM: ${process.env.EMAIL_FROM ? '✅ SET' : '❌ NOT SET'}`);

    // Send welcome email - always send, even if user already exists
    console.log(`📧 Starting email send process for: ${email}`);
    const emailResult = await sendWelcomeEmail(email, firstName || existing?.firstName || null);
    
    if (emailResult?.success) {
      console.log(`✅✅✅ Welcome email sent successfully to ${email} ✅✅✅`);
    } else {
      console.error(`❌❌❌ Failed to send email to ${email}: ${emailResult?.error} ❌❌❌`);
    }

    return NextResponse.json({ ok: true }, { status: existing ? 200 : 201 });
  } catch (err) {
    console.error("💥 Error in POST /api/waitlist:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
