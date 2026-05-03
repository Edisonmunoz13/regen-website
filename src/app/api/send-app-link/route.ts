import { NextResponse } from "next/server";
import { z } from "zod";
import { sendAppLinkEmail } from "@/lib/email";

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const result = await sendAppLinkEmail(parsed.data.email);
  if (!result.success) {
    return NextResponse.json(
      { error: "Couldn't send the link. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
