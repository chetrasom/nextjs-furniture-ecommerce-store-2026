import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
// Restrict Access to Admin Pages
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
    // console.log((await auth()).userId)
    const isAdminUser = (await auth()).userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

    // Admin route
    if (isAdminRoute(req) && !isAdminUser) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Public route
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}