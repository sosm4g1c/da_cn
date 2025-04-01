/* eslint-disable @typescript-eslint/no-unused-expressions */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Định nghĩa danh sách các route công khai
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/clerk", // ✅ Thêm API webhook vào danh sách public
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals và static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Luôn chạy cho API routes
    "/(api|trpc)(.*)",
  ],
};
