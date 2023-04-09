import Link from 'next/link'
import {useEffect, useState} from "react";
// export async function getStaticPaths(){
//     // const res = await fetch('/api/products')
//     // const data = await res.json()
//     // const item_list = data.map(el=>el.id)
//     const item_list = ['a','b','c','d','e','f','g','h']
//     return {paths:item_list, fallback: false }
// }
//
// export async function getstaticProps(props_params : {params:{id:string}} ){
//     const product_id = props_params.params.id
//     return {
//         props: {product: product_id}
//     }
// }


export default function Navbar({}){
    const [link_item,setlink] = useState([])
    useEffect(()=>{
        async function fetch_i(){
            const res = await fetch('/api/products')
            const data = await res.json()
            const data_item = data.map((el : any)=>el.id)
            // setlink(['a','b','c','d','e','f','g','h'])
            setlink(data_item)
        }
        fetch_i()
    },[])
    return <>
        <h3>Navbar</h3>
        <li><Link href='/'>Homepage</Link></li>
        <li><Link href='/products'>All Product</Link></li>
        <ul style={ {display:'flex',gap:'2em'} }>
        {link_item.map(el => <li key={el}><Link href={`/products/${el}`}>Link to {el}</Link></li>)}
        </ul>
    </>
}
