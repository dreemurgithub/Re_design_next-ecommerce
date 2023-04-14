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

        <p>Product list: {JSON.stringify(state)}</p>
        <h3>Id: {state.id}</h3>
        <p>{state.content}</p>
        <p>Price: {state.price}</p>
        <img src={state.url} alt=""/>
    </>
}
