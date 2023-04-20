import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {useSession} from "next-auth/react"


export default function Post() {
    const {data: session, status, update} = useSession()

    const [post_list, setlist] = useState([])
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart)
    const state = useSelector((state: any) => state)
    let sum = 0;
    const list_cart = Object.keys(cart)
    list_cart.forEach((el: string) => sum += cart[el])

    let total = 0;
    post_list.forEach((el: any) => {
        total += el.price * cart[el.id]
    })
    const coupon = useSelector((state: any) => state.coupon)
    total = total / 100 * (100 - coupon)

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setlist(data))
        const AAA: any = document.querySelector('.form-check-input')
        if (coupon === 20 && (AAA !== null)) AAA.checked = true


    }, [])
    return <div className='cart_display'>
        <div>
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <span className="form-label">Number of items: {sum}</span>
                    <span className="form-label">Total: {Math.round(total * 10) / 10}$</span>
                    <span>{coupon}% Off</span>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={(event: any) => {
                            if (event.target.checked) dispatch({type: 'coupon_name/add'})
                            else dispatch({type: 'coupon_name/remove'})
                        }}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Coupon</label>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={(e: any) => {

                    dispatch({type: 'total_cart/total_count', payload: Math.round(total * 10) / 10})
                    if (status === 'authenticated') {
                        const infor_list = document.querySelectorAll<HTMLInputElement>('.form-control')
                        const email = infor_list[0].value
                        const phone = infor_list[1].value
                        const address = infor_list[2].value
                        update({
                            name: 'Dat',
                            all_cart: JSON.stringify({cart: cart, coupon: coupon, total: total}),
                            email: email,
                            phone: phone,
                            address: address
                        })
                        alert('Information push to Session in server')
                        window.location.href = '/order'
                    }


                }}>Order
                </button>
            </div>
        </div>
        <div className='container text-center'>
            <div className='row border text-white bg-dark'>
                <div className="col border">Image</div>
                <div className="col">Price</div>
                <div className="col">New</div>
                <div className="col">Amount</div>
                <div className="col">From</div>
                <div className="col">Total</div>
            </div>

            {post_list.map((el: any) => {
                if (cart[el.id] > 0) return <div className='row border'>
                    <div className="col border"><img src={el.url} alt="" className={'img-fluid col '}/></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span><s>{el.price}$</s></span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span>{el.price * (100 - coupon) / 100}$</span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{display: 'flex',justifyContent:'space-evenly'}}>
                            <span onClick={() => {
                                dispatch({type: 'cart_name/add_one', payload: el.id})
                            }} style={{cursor:'pointer',color:'blue'}}>+</span>
                            <span>{cart[el.id]}</span>
                            <span onClick={() => {
                                dispatch({type: 'cart_name/minus_one', payload: el.id})
                            }} style={{cursor:'pointer',color:'black'}}>-</span>
                        </div>

                    </div>

                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span> <s>{cart[el.id] * el.price}$</s></span></div>
                    <div className="col border"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <span> <b>{cart[el.id] * el.price * (100 - coupon) / 100}$</b></span></div>

                </div>
                else return null
            })}
            <div className='row border text-white bg-dark' style={{height: '0.5em'}}>
                <div className="col"></div>
                <div className="col "></div>
                <div className="col "></div>
                <div className="col "></div>
                <div className="col "></div>
            </div>
        </div>
    </div>
}
