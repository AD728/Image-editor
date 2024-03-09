import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (typeof window !== "undefined") {
    const userToken = request.cookies.get("session-token")?.value;
    const uToken = sessionStorage.getItem("session-token");

    if (!userToken || uToken === null) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard"],
};
