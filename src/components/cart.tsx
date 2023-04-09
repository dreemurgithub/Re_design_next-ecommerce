import {useSelector} from "react-redux";
export default function Cart(){
    const store = useSelector((state : any )=>state)
    const cart = useSelector((state : any )=>state.cart)
    const coupon = useSelector((state : any )=>state.coupon)
    return <>
        <blockquote>This is sotre: {JSON.stringify(store)}</blockquote>
        <blockquote>This is cart: {JSON.stringify(cart)}</blockquote>
        <blockquote>This is copupon: {JSON.stringify(coupon)}</blockquote>
    </>
}
