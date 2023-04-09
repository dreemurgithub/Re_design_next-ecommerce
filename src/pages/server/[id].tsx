import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'
export async function getServerSideProps( ){
    const date = new Date()
    return {
        props : { data : date.toLocaleString() }
    }
}

export default function Server({data}:{data: string}){
    const {id} = useRouter().query
    const [state,setstate] = useState({content:null,url:'',id:null ,price: null })
    useEffect(()=>{
        async function fetch_i(){
            const res = await fetch(`/api/products/${id}`)
            const data_prod = await res.json()
            setstate(data_prod)
        }
        fetch_i()
    })

    return <>
        <p>Today is from getServerSideProps : {data} </p>
        <h2>url link is server/{id}</h2>
        <ul style={{display:'flex',gap:'2em' }}>
            <Link href='/server/a'>server/a</Link>
            <Link href='/server/b'>server/b</Link>
            <Link href='/server/c'>server/c</Link>
            <Link href='/server/d'>server/d</Link>
            <Link href='/server/e'>server/e</Link>
            <Link href='/server/f'>server/f</Link>
            <Link href='/server/g'>server/g</Link>
            <Link href='/server/h'>server/h</Link>
        </ul>
        <p>Product list: {JSON.stringify(state)}</p>
        <h3>Id: {state.id}</h3>
        <p>{state.content}</p>
        <p>Price: {state.price}</p>
        <img src={state.url} alt=""/>
    </>
}
