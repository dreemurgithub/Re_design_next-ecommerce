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
    const dispatch = useDispatch()
    // const dispatch = useAppDispatch()
    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setlist(data))
    }, [])

    return <>
        <main>
            <div style={ {display:'flex',justifyContent:'center'} }>
                <button className={'btn btn-success'} onClick={() => dispatch({type: 'coupon_name/add'})}>Add coupon
                </button>
            </div>
            <div style={{}}>

                <div style={{display: 'grid'}} className='product_list'>

                    {post_list.map((el: { id: string, content: string, url: string, price: number }) => <div
                        key={el.id}>
                        <h3>Product {el.id}</h3>
                        <img src={el.url} alt="" width={250} height={250}/>
                        <p>{el.content}</p>
                        <div className={'btn-group'} role="group" aria-label="Basic outlined example">
                            <button className={'btn btn-primary'} onClick={() => {
                                dispatch({type: 'cart_name/add_one', payload: el.id})
                            }}>Add one
                            </button>

                            <button className={'btn btn-secondary'} onClick={() => {
                                dispatch({type: 'cart_name/minus_one', payload: el.id})
                            }}>Remove one
                            </button>
                            {/*<span className="input-group-text" >{value.cart[el.id]}</span>*/}
                            <Link href={`/products/${el.id}`}>
                                <button className="btn btn-outline-primary">{value.cart[el.id]}</button>
                            </Link>
                        </div>


                    </div>)}
                </div>
            </div>

        </main>
    </>
}
