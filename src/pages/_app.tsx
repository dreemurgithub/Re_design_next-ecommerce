import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from '../store'
import Cart from "@/components/cart";
import Navbar from "@/components/navbar/index";
import Modal from "@/components/navbar/modal";
import Footer from '@/components/footer';
import * as dotenv from 'dotenv';
import {SessionProvider} from "next-auth/react"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    // console.log([process.env.Google_ID,process.env.Google_Secret])
    return <>
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>

                <div className='nav_container'>
                    {/*<Navbar/>*/}
                    <div>
                        <Navbar>
                            <Cart/>
                        </Navbar>
                        <Modal/>
                    </div>

                </div>
                <div>

                    <Component {...pageProps} />
                </div>
                <Footer />

            </Provider>

        </SessionProvider>
    </>
    // <Provider store={store}>
    // </Provider>
}
