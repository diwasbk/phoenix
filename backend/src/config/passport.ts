import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./config";
import { UserModel } from "../models/user.model";

passport.use(new GoogleStrategy({ clientID: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET, callbackURL: GOOGLE_CALLBACK_URL }, async (accessToken: string, refreshToken: string, profile: any, done: any) => {
    try {
        // Extract user information from Google profile
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName || profile.name?.givenName || "Google User";
        const photo = profile.photos?.[0]?.value || "";

        // Email is required to identify the user
        if (!email) {
            return done(new Error("Google account did not return an email address"));
        };

        // Find user by Google ID or email
        const userExist = await UserModel.findOne({
            $or: [{ googleId: profile.id }, { email }],
        });

        if (userExist) {
            // Link the Google ID if it hasn't been linked before
            userExist.googleId = userExist.googleId || profile.id;
            // Keep existing profile data; use Google's data only if missing
            userExist.fullName = userExist.fullName || name;
            userExist.profilePicture = userExist.profilePicture || photo;
            // Mark this account as using Google authentication
            userExist.provider = "google";
            await userExist.save();
            // Authentication successful
            return done(null, userExist);
        };

        // Create a new user for first-time Google login
        const result = await UserModel.create({
            googleId: profile.id,
            fullName: name,
            email: email,
            profilePicture: photo,
            provider: "google",
        });

        // Authentication successful
        return done(null, result);

    } catch (err: any) {
        // Authentication failed
        return done(err, false);
    };
}));

export default passport;