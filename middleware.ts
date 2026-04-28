import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("reviewpilot_token")?.value;
  const pathname = req.nextUrl.pathname;

  const user = token ? await verifyToken(token) : null;

  if (pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((pathname === "/login" || pathname === "/register") && user) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};