import {useEffect, useState} from "react";
import Link from 'next/link'

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

        // fetch_i()
        fetch(`/api/articles/${article_id}`)
            .then(res=>res.json())
            .then(data_f=>setdata(data_f))
        // fetch(`/api/articles/${article_id}`)
        //     .then(res=>res.json())
        //     .then(data_if=>setdata(data_if))
    }, [])
    return <article style={{textAlign: 'justify'}} className={'main_content'}>
        <h3>{article_id}: {data.category}</h3>
        <p>{data.author}</p>
        <div id={'article'} style={{display: 'grid'}}>

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

        <section>
            <div className='article_img'>
                <img
                    src="https://thehappypuppysite.com/wp-content/uploads/2018/10/brown-dog-names-long.jpg"
                    alt=""/>
                <div>
                    <h3>Lorem Ipsum passage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className={'btn btn-outline-primary'}>Read more</button>
                </div>
            </div>
            <div className='article_img'>
                <img
                    src="https://fishsubsidy.org/wp-content/uploads/2020/01/Maltese-Dog-Breed-1.jpg"
                    alt=""/>
                <div>
                    <h3>Lorem Ipsum passage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className={'btn btn-outline-primary'}>Read more</button>
                </div>
            </div>
            <div className = 'article_img'>
                <img
                    src="https://i.pinimg.com/originals/b1/b0/70/b1b07099ea586404e1f2838c5b511206.png"
                    alt=""/>
                <div>
                    <h3>Lorem Ipsum passage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className={'btn btn-outline-primary'}>Read more</button>
                </div>
            </div>


        </section>

    </article>

}
