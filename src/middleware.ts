import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateAuthToken } from "@/lib/auth";

export function middleware(request: NextRequest) {
  // Protect /admin routes (except /admin/login)
  if (request.nextUrl.pathname.startsWith("/admin/users")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (!authCookie || !validateAuthToken(authCookie.value)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
