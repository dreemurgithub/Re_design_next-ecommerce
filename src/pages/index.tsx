import * as dotenv from 'dotenv'
import {useEffect, useState} from "react"; // work

export default function Home() {
    const [post_list,setlist]=useState([])
    useEffect(()=>{
        fetch('/api/products')
            .then(res=>res.json())
            .then(data=>setlist(data))
    },[])
    return <>
            <main>
                <h1>Hello world</h1>
                {post_list.map((el : any )=> <>
                        <h3>{el.id}</h3>
                    <img src={el.url} alt="" width={144} height={144}/>
                    <p>{el.content}</p>
                    <button>Add to cart</button>
                    </>)}
            </main>
        </>
}
