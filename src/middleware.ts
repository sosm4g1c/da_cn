import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  // Cho phép truy cập công khai API webhook của Clerk
  if (req.nextUrl.pathname === "/api/webhooks/clerk") {
    return;
  }
  auth();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Loại bỏ file tĩnh và Next.js internals
    "/(api|trpc)(.*)", // Chạy middleware trên API routes
  ],
};
