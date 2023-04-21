import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";

export async function getServerSideProps() {
    const date = new Date()
    return {
        props: {data: date.toLocaleString()}
    }
}

export default function Server({data}: { data: string }) {
    const {id} = useRouter().query
    const [state, setstate] = useState({
        id: 'not found',
        url: 'not found',
        price: 0,
        content: 'not found',
        props1: 0,
        propp2: '',
        props3: true,
        props4: false,
        props5: '',
        props6: '',
        prop8: 0,
        prop9: ''
    })
    const [all_product, set_all_product] = useState([])
    const value: any = useSelector(state => state)
    const coupon = useSelector((state: any) => state.coupon)
    const amount = useSelector((state: any) => state['cart'][`${id}`])

    const dispatch = useDispatch()
    useEffect(() => {

        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => setstate(data))
        fetch(`/api/products`)
            .then(res => res.json())
            .then(data => set_all_product(data))
        // fetch_i()
    }, [id])

    function display_image(e: any) {
        const item = e.target
        const class_string = item.className
        console.log(class_string)
        const all_img = document.querySelectorAll('.all_img')
        all_img.forEach((el: any) => el.style.display = 'none')

        const turn_visible = document.querySelectorAll<HTMLElement>(`.${class_string}`);
        turn_visible[1].style.display = 'block'

        // document.getElementsByClassName(`${class_string}`)[1].style.display = 'block'
    }


    return <>

        <blockquote style={{padding: '1em', backgroundColor: 'beige'}}>Today is from getServerSideProps : <b>{data}</b>,
            from link server/id===server/<b>{id}</b>, using new
            Date().toLocalestring() will create infinite
            reload
        </blockquote>
        <div style={{
            width: '100%',
            height: '30em',
            backgroundImage: 'url("https://wallpapercave.com/wp/ncbCppR.jpg")',
            padding: '0',
            backgroundPosition: 'center center',
            backgroundSize: 'auto',
            color: 'white'
        }}>
            <div style={{ position: 'relative' , top:'20%',left:'10%',width:'40vw',textAlign: 'justify' }}>
                <h3>Lorem: {state.id} </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequatur debitis delectus dolor
                    ipsum, laboriosam molestias non perferendis repellat ullam voluptatum? Est facere iure nulla perferendis
                    saepe, sint sunt.</p>
                <button type="button" style={{ width:'10em' }} className="btn btn-light">Light</button>
            </div>
        </div>
        <div id={'product_page'}>
            <div style={{display: 'flex'}}>
                <div style={{width: '70px', display: 'grid', overflowY: 'scroll'}}>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_1'
                         src={state.url}
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_2'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_3'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_4'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={40}/>

                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_5'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_6'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_7'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={40}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_8'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={40}/>

                </div>
                <div style={{width: '450px', display: 'flex'}}>
                    <img style={{display: 'block'}} className='all_img imgage_1'
                         src={state.url}
                         alt="" width={400}/>
                    <img className='all_img imgage_2'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={400}/>
                    <img className='all_img imgage_3'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={400}/>
                    <img className='all_img imgage_4'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={400}/>

                    <img className='all_img imgage_5'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={400}/>
                    <img className='all_img imgage_6'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={400}/>
                    <img className='all_img imgage_7'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={400}/>
                    <img className='all_img imgage_8'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={400}/>

                </div>

            </div>
            <div>
                <div>
                    <h3>Product ID: {state.id}</h3>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Infor 1</th>
                        <th scope="col">Infor 2</th>
                        <th scope="col">Infor 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Type 1</th>
                        <td>{state.props1}</td>
                        <td>{state.propp2}</td>
                        <td>{state.props3 ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type 2</th>
                        <td>{state.props4 ? 'Yes' : 'No'}</td>
                        <td>{state.props5}</td>
                        <td>{state.props6}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type 3</th>
                        <td>{state.prop8}</td>
                        <td>{state.prop9}</td>
                        <td>No</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Old Price</th>
                        <th scope="col">New price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><s>{state.price}$</s></td>
                        <td><b style={{color: 'red'}}>{state.price * (100 - coupon) / 100}$</b></td>
                        <td><s>{state.price * amount}$</s></td>
                        <td>{Math.round(state.price * (100 - coupon) / 100 * amount * 10) / 10}$</td>
                    </tr>

                    </tbody>
                </table>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => {
                        dispatch({type: 'cart_name/add_one', payload: state.id})
                    }}>Add to cart
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        dispatch({type: 'cart_name/minus_one', payload: state.id})
                    }}>Remove one
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        dispatch({type: 'coupon_name/add'})
                    }}>Apply Coupon
                    </button>
                    <button type="button" className="btn btn-light"
                            onClick={() => dispatch({type: 'coupon_name/remove'})}><s>coupon</s></button>

                </div>

            </div>
        </div>

        <div style={{display: 'grid'}} className='product_list'>
            {all_product.map((el: { id: string, content: string, url: string, price: number }) => <div
                key={el.id}>
                <span><b> To Server/{el.id}</b></span>
                <button className={'btn btn-danger'} onClick={() => {
                    dispatch({type: 'coupon_name/add'})
                }}>Another 10% OFF
                </button>
                <Link href={`/server/${el.id}`}>
                    <img src={el.url} alt="" width={250} height={250}/>
                </Link>

                <div><s>{el.price}$</s> <b
                    style={{color: 'red'}}>{el.price * (100 - coupon) / 100}$</b> Content: {el.content} </div>
                <div className={'btn-group'} role="group" aria-label="Basic outlined example">
                    <button className={'btn btn-primary'} onClick={() => {
                        dispatch({type: 'cart_name/add_one', payload: el.id})
                    }}>Add one
                    </button>

                    <button className={'btn btn-secondary'} onClick={() => {
                        dispatch({type: 'cart_name/minus_one', payload: el.id})
                    }}>Remove one
                    </button>
                    <button className="btn btn-outline-primary">{value.cart[el.id]}</button>
                </div>
            </div>)}

        </div>
    </>
}
