import path from "path";

export async function getStaticPaths(){
    const paths = [{params: {id: 'a'}},{params: {id: 'b'}},{params: {id: 'c'}},{params: {id: 'd'}},{params: {id: 'e'}}]
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(props_param: {params:{id:string} } ) {
    const data = props_param.params.id
    return {
        props: {id: data}
    }
}

export default function postlist({id}:{id:string}){
    return <>
        <p>{id}</p>
    </>
}