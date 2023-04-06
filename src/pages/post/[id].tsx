import path from "path";
import {promises as fs} from "fs";

export async function getStaticPaths(){
    const filepath = path.join(process.cwd(),'file','post.json')
    const data_string = await fs.readFile(filepath,'utf8')
    const data = JSON.parse(data_string)
    const paths = []
    for(let i=0;i<data.length;i++){
        paths.push({ params: { id: data[i].id }  } )
    }
    // const paths = [{params: {id: 'a'}},{params: {id: 'b'}},{params: {id: 'c'}},{params: {id: 'd'}},{params: {id: 'e'}}]
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(props_param: {params:{id:string} } ) {
    // const data = props_param.params.id
    const filepath = path.join(process.cwd(),'file','post.json')
    const data_string = await fs.readFile(filepath,'utf8')
    const id = props_param.params.id
    const data = JSON.parse(data_string)
    let index = -1
    for(let i=0;i<data.length;i++){
        if(data[i].id===id) index = i;
    }

    return {
        props: {item: data[index]}
    }
}

export default function postlist({item}:{content:string,url:string,id:string,price:number}){
    return <>
        <h3>{item.id}</h3>
        <p>{item.content}</p>
        <h4>{item.price}</h4>
        {/*<p>{item.url}</p>*/}
        <img src={item.url} alt="" width={144} height={144}/>
        <br/>
        <button>Add to cart</button>
    </>
}
