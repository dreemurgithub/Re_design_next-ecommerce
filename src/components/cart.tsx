import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Link from 'next/link'

export default function Cart() {
    const dispatch = useDispatch()

    const cart = useSelector((state: any) => state.cart)
    const arr_cart_keys = Object.keys(cart)
    let sum_all = 0
    arr_cart_keys.forEach(el => sum_all += cart[el])
    useEffect(() => {
        dispatch({type: 'cart_name/load_refresh'})
    }, [])
    return <div className="navbar navbar-expand-lg bg-body-tertiary">
        <Link href='/products' style={{ textDecoration: 'none',color:'black' }}>
            <div style={{display: 'flex',}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor"
                     className="bi bi-cart"
                     viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span>Items:{sum_all}</span>

            </div>
        </Link>
    </div>


}
