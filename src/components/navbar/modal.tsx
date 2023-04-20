import Link from 'next/link'
import {useSelector,useDispatch} from "react-redux";
import React, {useEffect, useMemo, useState} from "react";

export default function Modal() {
    const menu_show = useSelector((state: any) => state.menu)
    const [link_item, setlink] = useState([])
    const [link_post, set_post_link] = useState<any>([])
    const [server_products, set_server] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        fetch('/api/products').then((res:any)=>res.json()).then((data:any)=>{
            const data_item = data.map((el: any) => el.id)
            setlink(data_item)
        })
        fetch('/api/articles').then((res:any)=>res.json()).then((data:any)=>{
            const data_post_arr = Object.keys(data)
            const data_temp = data_post_arr.map(el => el);
            set_post_link(data_temp)
        })
        fetch('/api/products').then((res:any)=>res.json()).then((data:any)=>{
            const array_href_product = data.map((el: any) => el.id)
            set_server(array_href_product)
        })

        // fetch_i()
    },[] )

    return <div className='container-fluid' onClick={ ()=>dispatch({type: 'menu_show/hid_all'}) }>
        <div style={{display: menu_show[0] ,textAlign: 'center'}}>

            <ul  className="navbar-nav display_menu">

                {link_item.map((el: any) =>
                    <li key={el} style={{ border:'1px black solid', borderRadius:'1em'  }}>
                        <Link href={`/products/${el}`} className="nav-link">
                            Product: {el}</Link>
                    </li>)}

            </ul>
        </div>
        <div style={{display: menu_show[1],textAlign: 'center'}}>

            <ul  className="navbar-nav display_menu">

                {link_post.map((el: any) =>
                    <li key={el} className='nav-item' style={{ border:'1px black solid' , borderRadius:'1em' }}>
                        <Link href={`/articles/${el}`} className="nav-link">
                            Articles: {el}</Link>
                    </li>)}

            </ul>
        </div>
        <div style={{display: menu_show[2],textAlign: 'center'}} >

            <ul className="navbar-nav display_menu">
                {server_products.map((el: any) =>
                    <li key={el} style={{ border:'1px black solid', borderRadius:'1em' }}>
                        <Link href={`/server/${el}`} className="nav-link">
                            Server: {el}</Link>
                    </li>)}
            </ul>
        </div>
    </div>
}
