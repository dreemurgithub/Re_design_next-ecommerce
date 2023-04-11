import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from '../store'
import Cart from "@/components/cart";
import Navbar from "@/components/navbar";
import Login from "@/components/login";
import * as dotenv from 'dotenv';
import { SessionProvider } from "next-auth/react"

export default function App({Component, pageProps}: AppProps) {

    // console.log([process.env.Google_ID,process.env.Google_Secret])
    return <>
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <Cart/>
                <Login />
                <Navbar />
                <Component {...pageProps} />

            </Provider>

        </SessionProvider>
    </>
    // <Provider store={store}>
    // </Provider>
}
