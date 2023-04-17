import Link from 'next/link'
import {useEffect, useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react"

export default function Navbar({}){
    const {data: session } = useSession()
    const [link_item,setlink] = useState([])
    const [link_post,set_post_link] = useState<any>([])
    const [server_products,set_server] = useState([])
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

            const array_product_server = await fetch('/api/products')
            const array_product_obj = await array_product_server.json()
            const array_href_product = array_product_obj.map((el:any)=>el.id)
            set_server(array_href_product)
        }
        fetch_i()
    },[])
    return <div>
        {/*<li><Link href='/products'>All Product</Link></li>*/}

        {/*<ul style={ {display:'flex',gap:'2em'} }>*/}

        {/*    {link_post.map((el:any) => <li key={el}><Link href={`/articles/${el}`}>Link to {el}</Link></li>)}*/}
        {/*</ul>*/}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={()=> {
                                if(session===null || session===undefined) signIn()
                                else signOut()
                            }} href='#'><b>{(session===null || session===undefined ) ?'Signin': 'Signout' }</b> </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ><b>
                                {(session===null ||session===undefined || session.user===undefined ||session.user===null || session.user.name===undefined )
                                    ?'???': `Hello ${session.user.name}` }</b></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href='/order'>Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href='/products'>Cart</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Products
                            </Link>
                            <ul className="dropdown-menu">
                                {link_item.map((el:any) =>
                                    <li key={el}><Link href={`/products/${el}` }className="dropdown-item" >
                                        Link to Product: {el}</Link>
                                    </li>)}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                Articles
                            </Link>
                            <ul className="dropdown-menu">
                                {link_post.map((el:any) =>
                                    <li key={el}>
                                        <Link href={`/articles/${el}`} className="dropdown-item">Link to Articles: {el}</Link>
                                    </li>)}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                ServerSide-Link
                            </Link>
                            <ul className="dropdown-menu">
                                {server_products.map((el:any) =>
                                    <li key={el}>
                                        <Link href={`/server/${el}`} className="dropdown-item">Link to Server: {el}</Link>
                                    </li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
