import passport from "passport";
import {Strategy, Profile} from "passport-discord";
import {VerifyCallback} from "passport-oauth2"
import {config} from "dotenv";
config();

passport.use(new Strategy({
        clientID: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
        callbackURL: process.env.REDIRECT_URL!,
        scope: ['identify', "email", "guilds"],
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
        console.log(profile.email);
    }))
