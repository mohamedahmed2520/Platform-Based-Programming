
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export function middleware(req:NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  if (path === "/" || path.startsWith("/login") || path.startsWith("/register")) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = verifyToken(token);

  if (path.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"]
};
