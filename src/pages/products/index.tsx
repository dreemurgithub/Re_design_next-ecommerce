import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
export default function Post(){
    const [post_list,setlist]= useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch('/api/products')
            .then(res=>res.json())
            .then(data=>setlist(data))
    },[])
    return <>
        <main>
            <h1>Hello post</h1>
            {post_list.map((el : any )=> <>
                <h3>{el.id}</h3>
                <img src={el.url} alt="" width={144} height={144}/>
                <p>{el.content}</p>
                <button onClick={()=>dispatch({type:'cart_name/add_one', payload:el.id }) }>Add one</button>
                <button onClick={()=> {
                    dispatch({type:'cart_name/minus_one', payload:el.id } )
                }}>Remove one</button>

            </>)}
        </main>
    </>
}
