import {useEffect, useState} from "react";


export async function getStaticPaths() {

    // const array_article_res = await fetch('/api/articles')
    // const array_articles = await array_article_res.json()

    // const array_key = Object.keys(getFetch())
    // const array_obj = array_key.map((el :string)=>{params:{id:el } })

    // const array_key = getFetch()
    const array_key = ['011aa', '034sc', 'asd34b', 'acfge', 'scxvvsv', 'sadcf', 'ff47y', '54fasfd', 'asf3345']


    // const array_obj = getFetch()
    const array_obj = []
    for (let i = 0; i < array_key.length; i++) array_obj.push({params: {id: array_key[i]}})
    return {
        paths: array_obj, fallback: false
    }
}

export async function getStaticProps(props_params: { params: { id: string } }) {
    // console.log(props_params.params)
    // const res = await fetch(`/api/articles/${props_params.params.id}`)
    // const data = await res.json()
    return {
        props: {article_id: props_params.params.id}
    }
}

export default function Articles_ID({article_id}: { article_id: string }) {

    const [data, setdata] = useState({author: null, category: null})
    useEffect(() => {
        async function fetch_i() {
            const res = await fetch(`/api/articles/${article_id}`)
            const data_f = await res.json()
            setdata(data_f)
            //
            // const array_article_res = await fetch('/api/articles')
            // const array_articles = await array_article_res.json()
            // alert(Object.keys(array_articles))
        }

        fetch_i()
        // fetch(`/api/articles/${article_id}`)
        //     .then(res=>res.json())
        //     .then(data_if=>setdata(data_if))
    }, [data])
    return <article style={{textAlign: 'justify'}}>
        <h3>{article_id}: {data.category}</h3>
        <p>{data.author}</p>
        <div id={'article'} style={{display:'grid'}}>

            <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-vang-2-1.jpg" width={450} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                ipsum, laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis
                saepe, sint sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                ipsum, laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis
                saepe, sint sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                ipsum,
                laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis saepe,
                sint sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                ipsum,
                laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis saepe,
                sint sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                ipsum,
                laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis saepe,
                sint sunt.</p>
        </div>

    </article>
}
