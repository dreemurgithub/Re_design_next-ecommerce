import {useSelector} from "react-redux";
import {useSession} from "next-auth/react";
import {string} from "prop-types";
import {useEffect, useState} from "react";
export default function Order(){
    const state = useSelector((state:any)=>state)
    const {data: session} = useSession()
    const new_session = session as any
    const [session_state,setState] =useState<any>()
    useEffect(()=>{
        if(session) {
            const infor = new_session.cart_infor
            setState(infor)
        }
        console.log(session_state)
    },[session])
    // const all_cart = ( session.hasOwnProperty('all_cart') && (session!==null) ) ? session.all_cart : null
    if(
        // session && session!==undefined && session.user !== undefined && session.user.image !== undefined && session.user.name !== undefined
        // && session.user.email !== undefined
        // && session.user.all_cart !== undefined && session.all_cart!==undefined
        session_state!==null && session
    ) return <>
        <h1>Order Page</h1>
        <blockquote>The order are save in session, or push token data to some database</blockquote>

        <h3>User: {session.user && session.user.name ?  `${session.user.name}` : null}</h3>
        <img src={ session.user && session.user.image ?  `${session.user.image}`: ''} alt=""/>
        <h4>Email: {session.user && session.user.image ? `${session.user.email}` : null}</h4>

        {/*<p>Phone: {session_state!==null && session_state.user.phone !==undefined ? session_state.user.phone : null}</p>*/}
        {/*<p>Cart Json for Database: {session_state!==null ? session_state.all_cart : null}</p>*/}
        {/*<p>Address: {session_state!==null ? session_state.user.address : null}</p>*/}

        {/*<p>Cart Infor: {session.cart_infor !== undefined ? JSON.stringify(session.cart_infor) : null}</p>*/}
        <p>All Cart: {session_state ? session_state.all_cart : null}</p>
        <p>Email Submit: {session_state ? session_state.email : null}</p>
        <p>Phone Submit: {session_state ? session_state.phone : null}</p>
        <p>Address Submit: {session_state ? session_state.address : null}</p>
    </>
    else return <h3>Please Sign in</h3>
}
