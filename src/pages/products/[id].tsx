import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
export default function Product_id(){
    const [product,set_product]= useState({id:'not found',url:'not found',price:0,content:'not found'})
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    useEffect(()=>{
        // window.location.reload()
        fetch(`/api/products/${id}`)
            .then(res=>res.json())
            .then(data=>set_product(data))
    },[id])
    return <>
        <div>
            <h1>Hello product</h1>

            <h3>{product.id}</h3>
            <img src={product.url} alt=""/>
            <p>{product.content}</p>
            <h4>{product.price}</h4>
            <button onClick={()=>dispatch({type:'cart_name/add_one', payload:product.id }) }>Add to cart</button>
            <button onClick={()=> {
                dispatch({type:'cart_name/minus_one', payload:product.id } )
            }}>Remove one</button>

        </div>
    </>
}
