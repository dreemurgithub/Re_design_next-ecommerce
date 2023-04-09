import * as dotenv from 'dotenv'
import {useEffect, useState} from "react"; // work
import {useStore,useSelector,useDispatch} from "react-redux";
// import { useAppSelector, useAppDispatch } from ''

// import {add_amount,test,CartState} from "@/store";

export default function Home() {
    const [post_list,setlist]=useState([])

    // const cart_state = useSelector(state  =>state.cart)
    //
    // const a_state = useSelector((state : {cart:CartState })=>state.cart.a)
    const value = useSelector(state=>state)
    const dispatch = useDispatch()
    // const dispatch = useAppDispatch()
    useEffect(()=>{
        fetch('/api/products')
            .then(res=>res.json())
            .then(data=>setlist(data))
    },[])
    return <>
            <main>
                <h1>Hello world</h1>
                <button onClick={()=>dispatch({type:'coupon_name/add'}) }>Add coupon</button>
                {/*<h2>cart_state: {JSON.stringify(cart_state)}</h2>*/}
                <h2>value: {JSON.stringify(value)}</h2>

                {/*<button onClick={()=>{*/}
                {/*    dispatch({type:'cart_name/add_amount'})*/}
                {/*} }>Value add</button>*/}
                {/*<button onClick={()=>{*/}
                {/*    dispatch({type:'cart_name/clear'})*/}
                {/*} }>Clear</button>*/}
                {/*<button onClick={()=>{*/}
                {/*    dispatch({type:'cart_name/add_something',payload: 3})*/}
                {/*} }>Add 3</button>*/}
                {/*/!*<h3>{a_state}</h3>*!/*/}

                {post_list.map((el : { id:string,content:string,url:string,price:number } )=> <>
                        <h3>{el.id}</h3>
                    <img src={el.url} alt="" width={144} height={144}/>
                    <p>{el.content}</p>

                    <button onClick={()=> {
                        dispatch({type:'cart_name/add_one', payload:el.id } )
                    }}>Add to cart</button>

                    <button onClick={()=> {
                        dispatch({type:'cart_name/minus_one', payload:el.id } )
                    }}>Remove one</button>

                </>)}

            </main>
        </>
}
