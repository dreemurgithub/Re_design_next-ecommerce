import * as dotenv from 'dotenv'
import {useEffect, useState} from "react"; // work
import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link';
// import { useAppSelector, useAppDispatch } from ''

// import {add_amount,test,CartState} from "@/store";

export default function Home() {
    const [post_list, setlist] = useState([])
    const [width_item, set_item] = useState(300)
    // const cart_state = useSelector(state  =>state.cart)
    //
    // const a_state = useSelector((state : {cart:CartState })=>state.cart.a)
    const value: any = useSelector(state => state)
    const coupon = useSelector((state: any) => state.coupon)

    const dispatch = useDispatch()
    // const dispatch = useAppDispatch()
    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setlist(data))
    }, [])

    return <>
        <main>

            <div>

                <div style={{display: 'grid'}} className='product_list'>

                    {post_list.map((el: { id: string, content: string, url: string, price: number }) => <div
                        key={el.id}>
                        <span><b> Product {el.id}</b></span>
                        <button className={'btn btn-danger'} onClick={() => {
                            dispatch({type: 'coupon_name/add'})
                        }}>Another 10% OFF
                        </button>
                        <Link href={`/products/${el.id}`}>
                            <img src={el.url} alt="" width={250} height={250}/>
                        </Link>

                        <div><s>{el.price}$</s> <b
                            style={{color: 'red'}}>{el.price * (100 - coupon) / 100}$</b> Content: {el.content} </div>
                        <div className={'btn-group'} role="group" aria-label="Basic outlined example">
                            <button className={'btn btn-primary'} onClick={() => {
                                dispatch({type: 'cart_name/add_one', payload: el.id})
                            }}>Add one
                            </button>

                            <button className={'btn btn-secondary'} onClick={() => {
                                dispatch({type: 'cart_name/minus_one', payload: el.id})
                            }}>Remove one
                            </button>
                            <button className="btn btn-outline-primary">{value.cart[el.id]}</button>
                        </div>
                    </div>)}
                </div>
            </div>

            <div>
                <h3>Product Slide</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                <div style={{display: 'flex', marginBottom: '2em'}} className='product_slide'>
                    {post_list.map((el: { id: string, content: string, url: string, price: number }) => <div
                        key={el.id}>
                        <span><b> Product {el.id}</b></span>
                        <button className={'btn btn-danger'} onClick={() => {
                            dispatch({type: 'coupon_name/add'})
                        }}>Another 10% OFF
                        </button>
                        <Link href={`/products/${el.id}`}>
                            <img src={el.url} alt="" width={250} height={250}/>
                        </Link>

                        <div style={{backgroundColor: 'whitesmoke', padding: '1em', textAlign: 'justify'}}>
                            <s>{el.price}$</s> <b
                            style={{color: 'red'}}>{Math.round(el.price * (100 - coupon) / 100*10)/10}$</b> Content: {el.content},
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>

                        <button className={'btn btn-primary'} onClick={() => {
                            dispatch({type: 'cart_name/add_one', payload: el.id})
                        }}>+1 item
                        </button>
                        <button className={'btn btn-secondary'} onClick={() => {
                            dispatch({type: 'cart_name/minus_one', payload: el.id})
                        }}>-1 item
                        </button>
                        <button className="btn btn-outline-primary">{value.cart[el.id]}</button>
                    </div>)}

                </div>
            </div>
        </main>
    </>
}
