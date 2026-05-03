import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { JWT_SECRET_KEY } from "./app/lib/config/config";

// Encode JWT secret key for verification
const secret = new TextEncoder().encode(JWT_SECRET_KEY!);

// Middleware function to protect routes
export const middleware = async (req: NextRequest) => {
    // Get auth token from cookies
    const token = req.cookies.get("auth_token")?.value;

    // If no token found, redirect user to login page
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    };

    try {
        // Verify JWT token validity
        await jwtVerify(token, secret);

        // If valid, allow request to continue
        return NextResponse.next();

    } catch (err) {
        // If token is invalid or expired, redirect to login

        const res = NextResponse.redirect(new URL("/login", req.url));

        // Remove invalid token from cookies
        res.cookies.delete("auth_token");

        return res;
    };
};

// Apply middleware only to admin routes
export const config = {
    matcher: ["/admin/:path*"]
};