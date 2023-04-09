import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from '../store'
import Cart from "@/components/cart";
import Navbar from "@/components/navbar";

export default function App({Component, pageProps}: AppProps) {
    // console.log(store.reducer)
    // const all_store = useSelector(state=>state)
    // const [cart,set_cart] = useState({})
    return <>
        <Provider store={store}>
            <Cart/>
            <Navbar />
            <Component {...pageProps} />
        </Provider>
    </>
    // <Provider store={store}>
    // </Provider>
}
