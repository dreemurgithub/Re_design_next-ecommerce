import * as dotenv from 'dotenv'
import {useEffect, useState} from "react"; // work
import {useStore,useSelector,useDispatch} from "react-redux";
import {add_amount,test,CartState} from "@/store";

export default function Home() {
    const [post_list,setlist]=useState([])

    const cart_state = useSelector((state : {cart:CartState }) =>state)

    const a_state = useSelector((state : {cart:CartState })=>state.cart.a)
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch('/api/products')
            .then(res=>res.json())
            .then(data=>setlist(data))
    },[])
    return <>
            <main>
                <h1>Hello world</h1>
                <h2>{JSON.stringify(cart_state)}</h2>
                <h3>{a_state}</h3>
                {post_list.map((el : any )=> <>
                        <h3>{el.id}</h3>
                    <img src={el.url} alt="" width={144} height={144}/>
                    <p>{el.content}</p>

                    <button onClick={()=> {
                        // dispatch(add_amount({payload: el.id} ) )
                    }}>Add to cart</button>

                    <button onClick={()=> {
                        dispatch(test(cart_state.cart))
                        // dispatch(test(cart_state.cart))
                    }}>test</button>

                </>)}
            </main>
        </>
}
