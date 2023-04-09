import {useEffect, useState} from "react";

export async function getStaticPaths(){
    // const res = await fetch('/api/articles')
    // const data = await res.json()
    // const array_obj = Object.keys(data)

    // const array_obj = [{params: {id: "011aa"}},"034sc","asd34b","acfge","scxvvsv","sadcf","ff47y","54fasfd","asf3345"]
    const array_obj = [{params: {id: "011aa"}},{params: {id: "034sc"}},{params: {id: "asd34b"}},{params: {id: "acfge"}}
        ,{params: {id: "asf3345"}},{params: {id: "scxvvsv"}},{params: {id: "sadcf"}},{params: {id: "ff47y"}},{params: {id: "54fasfd"}}]
    return {
        paths: array_obj , fallback: false
    }
}

export async function getStaticProps(props_params:{params:{id: string}}){
    // console.log(props_params.params)
    // const res = await fetch(`/api/articles/${props_params.params.id}`)
    // const data = await res.json()
    return {
        props : {article_id : props_params.params.id  }
    }
}

export default function Articles_ID( {article_id}:{article_id: string } ){

    const [data,setdata] = useState({author:null,category: null})
    useEffect(()=>{
        async function fetch_i(){
            const res = await fetch(`/api/articles/${article_id}`)
            const data_f = await res.json()
            setdata(data_f)
        }
        fetch_i()
        // fetch(`/api/articles/${article_id}`)
        //     .then(res=>res.json())
        //     .then(data_if=>setdata(data_if))
    } )
    return <>
        <h3>{data.category}</h3>
        <p>{data.author}</p>

    </>
}
