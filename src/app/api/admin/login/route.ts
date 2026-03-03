import { NextResponse } from "next/server";
import { generateAuthToken } from "@/lib/auth";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request: Request) {
  try {
    // Validar que las credenciales estén configuradas
    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      console.error("Admin credentials not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const { username, password } = await request.json();

    // Validación segura de credenciales con protección contra timing attacks
    const usernameMatch = timingSafeEqual(username, ADMIN_USERNAME);
    const passwordMatch = timingSafeEqual(password, ADMIN_PASSWORD);

    if (usernameMatch && passwordMatch) {
      // Generar token seguro
      const authToken = generateAuthToken();
      
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin-auth", authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/**
 * Comparación segura de strings para prevenir timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin-auth");
  return response;
}
