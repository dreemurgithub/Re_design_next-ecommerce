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
    const [link_post,set_post_link] = useState<any>([])
    useEffect(()=>{
        async function fetch_i(){
            const res = await fetch('/api/products')
            const data = await res.json()
            const data_item = data.map((el : any)=>el.id)
            // setlink(['a','b','c','d','e','f','g','h'])
            setlink(data_item)

            const res_post = await fetch('/api/articles')
            const data_post = await res_post.json()
            const data_post_arr = Object.keys(data_post)
            const data_temp = data_post_arr.map(el=>el);
            set_post_link(data_temp)
        }
        fetch_i()
    },[])
    return <>
        <h3>Navbar</h3>
        <li><Link href='/'>Homepage</Link></li>
        <li><Link href='/products'>All Product</Link></li>
        <li><Link href='/server/a'>server/a</Link></li>
        <ul style={ {display:'flex',gap:'2em'} }>
        {link_item.map((el:any) => <li key={el}><Link href={`/products/${el}`}>Link to {el}</Link></li>)}
        </ul>
        <li><Link href='/articles'>Articles</Link></li>

        <ul style={ {display:'flex',gap:'2em'} }>

            {link_post.map((el:any) => <li key={el}><Link href={`/articles/${el}`}>Link to {el}</Link></li>)}
        </ul>
    </>
}
