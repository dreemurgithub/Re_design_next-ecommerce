import {NextApiRequest,NextApiResponse} from "next";
import NextAuth from "next-auth";
import * as dotenv from 'dotenv';
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: `${process.env.Google_ID}`,
            clientSecret: `${process.env.Google_Secret}`
        })

        // ...add more providers here
    ],
    secret: `${process.env.JWT_SECRET}`,
}

export default NextAuth(authOptions)