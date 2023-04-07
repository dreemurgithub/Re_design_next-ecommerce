import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from '../store'
export default function App({Component, pageProps}: AppProps) {
    // console.log(store.reducer)
    return <Provider store={store}>

        <Component {...pageProps} />
    </Provider>
    // <Provider store={store}>
    // </Provider>
}
