import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  if (["/", "/api/webhooks/clerk", "/api/webhooks/stripe"].includes(req.nextUrl.pathname)) {
    return; // Cho phép truy cập công khai
  }
  auth(); // Áp dụng xác thực cho các route còn lại
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
