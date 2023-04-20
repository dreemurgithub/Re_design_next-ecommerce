import {useSelector} from "react-redux";
import {useSession} from "next-auth/react";
import {string} from "prop-types";
import {useEffect, useState} from "react";
export default function Order(){
    const state = useSelector((state:any)=>state)
    const {data: session} = useSession()
    const new_session = session as any
    const [session_state,setState] =useState<any>()

    const cart = session_state? JSON.parse(session_state.all_cart).cart : null
    const [post_list, setlist] = useState([])
    const coupon = useSelector((state:any)=>state.coupon)
    const total = session_state? JSON.parse(session_state.all_cart).total : null
    useEffect(()=>{
        if(session) {
            const infor = new_session.cart_infor
            setState(infor)
        }
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setlist(data))
        console.log(session_state)
    },[session])
    // const all_cart = ( session.hasOwnProperty('all_cart') && (session!==null) ) ? session.all_cart : null
    if(
        // session && session!==undefined && session.user !== undefined && session.user.image !== undefined && session.user.name !== undefined
        // && session.user.email !== undefined
        // && session.user.all_cart !== undefined && session.all_cart!==undefined
        session_state!==null && session
    ) return <>

        {/*<h3>User: {session.user && session.user.name ?  `${session.user.name}` : null}</h3>*/}
        {/*<img src={ session.user && session.user.image ?  `${session.user.image}`: ''} alt=""/>*/}
        {/*<h4>Email: {session.user && session.user.image ? `${session.user.email}` : null}</h4>*/}

        {/*<p>Phone: {session_state!==null && session_state.user.phone !==undefined ? session_state.user.phone : null}</p>*/}
        {/*<p>Cart Json for Database: {session_state!==null ? session_state.all_cart : null}</p>*/}
        {/*<p>Address: {session_state!==null ? session_state.user.address : null}</p>*/}

        {/*<p>Cart Infor: {session.cart_infor !== undefined ? JSON.stringify(session.cart_infor) : null}</p>*/}
        

        <table className="table table-info border-1">
            <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
            </tr>
            </thead>
            <tbody className='table-striped'>
            <tr>
                <td>{session.user && session.user.name ?  `${session.user.name}` : null}</td>
                <td>{session.user && session.user.image ? `${session.user.email}` : null}</td>
                <td><img src={ session.user && session.user.image ?  `${session.user.image}`: ''} alt="" height={20} width={20}/></td>
            </tr>
            </tbody>

        </table>
        <h2>Product you bought</h2>
        <p>The item are from the session.all_cart.cart. Create a session_state===session as any, session._all_cart received information after Clicking order
        and the session_state update the below order </p>
        { cart!==null? <div className='container text-center'>
            <div className='row border text-white bg-dark'>
                <div className="col border">Image</div>
                <div className="col">Price</div>
                <div className="col">New</div>
                <div className="col">Amount</div>
                <div className="col">From</div>
                <div className="col">Total</div>
            </div>

            {post_list.map((el: any) => {
                if (cart !== null && cart[el.id] > 0) return <div className='row border'>
                    <div className="col border"><img src={el.url} alt="" className={'img-fluid col '}/></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span><s>{el.price}$</s></span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span>{el.price * (100 - coupon) / 100}$</span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span>{cart[el.id]}</span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span> <s>{cart[el.id] * el.price}$</s></span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span> <b>{cart[el.id] * el.price * (100 - coupon) / 100}$</b></span></div>

                </div>
                else return null
            }) }
            <div className='row border text-white bg-dark' style={{height: '0.5em'}}>
                <div className="col"></div>
                <div className="col "></div>
                <div className="col "></div>
                <div className="col "></div>
                <div className="col "></div>
            </div>
        </div> : <h3> After finishing the order, the cart should display here </h3>}
        {cart!==null ?  <table className={'table table-striped'}>
            <thead>
            <tr>
                <th scope="col">Order Email</th>
                <th scope="col">Order Address</th>
                <th scope="col">Order Phone</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody>
            <td>{session_state ? session_state.email : null}</td>
            <td>{session_state ? session_state.address : null}</td>
            <td>{session_state ? session_state.phone : null}</td>
            <td>{total}$</td>
            </tbody>
        </table> : <p> After finishing the order, the form should display here </p>}
        {/*<p>All Cart: {session_state ? session_state.all_cart : null}</p>*/}
        {/*<p>Email Submit: {session_state ? session_state.email : null}</p>*/}
        {/*<p>Phone Submit: {session_state ? session_state.phone : null}</p>*/}
        {/*<p>Address Submit: {session_state ? session_state.address : null}</p>*/}
    </>
    else return <h3>Please Sign in</h3>
}

