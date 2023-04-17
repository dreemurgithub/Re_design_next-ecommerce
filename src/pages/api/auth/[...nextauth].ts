import {NextApiRequest,NextApiResponse} from "next";
import NextAuth from "next-auth";
import * as dotenv from 'dotenv';
import GoogleProvider from "next-auth/providers/google"
import url from "url";

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
    callbacks : {
        async jwt({ token, trigger, session }:any) {
            if (trigger === "update") {
                // in client update( {name:...,total: ...,all_cart:....}===session   ,here
                token.cart_infor = {}
                // token.all_cart = session.all_cart
                // if(session.email!=='') token.email = session.email
                // if(session.phone!=='') token.phone = session.phone
                // if(session.address!=='') token.address = session.address
                token.cart_infor.all_cart = session.all_cart
                if(session.email!=='') token.cart_infor.email = session.email
                if(session.phone!=='') token.cart_infor.phone = session.phone
                if(session.address!=='') token.cart_infor.address = session.address
            }
            return token
        },

        async session({ session, token, user }:any) {
            // Send properties to the client, like an access_token and user id from a provider.
            const x = url
            // session.accessToken = token.accessToken
            // session.user.id = token.id
            // user.something = 'text'  // make the function stop working
            console.log(token)
            // session.role = 'admin'  // worked!
            // session.all_cart = token.all_cart // update from token, if there is a database, push from token to database
            // if(token.phone!=='') session.user.phone = token.phone
            // if(token.address!=='') session.user.address = token.address
            session.cart_infor = token.cart_infor

            return session
            // return token
            // down here from jwt

        },

    }
}

export default NextAuth(authOptions)
