import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import Link from 'next/link'

export default function Product_id() {
    const [product, set_product] = useState({id: 'not found', url: 'not found', price: 0, content: 'not found'})
    const router = useRouter()
    const {id} = router.query
    const amount = useSelector((state: any) => state['cart'][`${id}`])
    const dispatch = useDispatch()
    useEffect(() => {
        // window.location.reload()
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => set_product(data))
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
        <Link href={'https://www.adoredvintage.com/collections/dresses/products/feminine-vintage-inspired-beige-floral-printed-tiered-maxi-sundress'}>Design like this</Link>
        <div id='product_page' style={{display: 'grid'}}>

            <div style={{display: 'flex'}}>
                <div style={{width: '90px', display: 'grid', overflowY: 'scroll'}}>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_1'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_2'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_3'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_4'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={60}/>

                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_5'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_6'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_7'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={60}/>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_8'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={60}/>

                </div>
                <div style={{width: '500px', display: 'flex'}}>
                    <img style={{display: 'block'}} className='all_img imgage_1'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={500}/>
                    <img className='all_img imgage_2'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={500}/>
                    <img className='all_img imgage_3'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={500}/>
                    <img className='all_img imgage_4'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={500}/>

                    <img className='all_img imgage_5'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
                         alt="" width={500}/>
                    <img className='all_img imgage_6'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74"
                         alt="" width={500}/>
                    <img className='all_img imgage_7'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c"
                         alt="" width={500}/>
                    <img className='all_img imgage_8'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c"
                         alt="" width={500}/>

                </div>

            </div>
            <div style={ { textAlign: 'justify'} }>
                <h3>Product: {product.id}</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit officia quia
                    repellat repudiandae.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit officia quia
                    repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure, molestiae nam
                    natus officia quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit
                    officia quia repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure,
                    molestiae nam natus officia quam?</p>
                {/*<img src={product.url} alt=""/>*/}
                {/*<p>{product.content}</p>*/}
                <h4>Price:{product.price}$. Amount: {amount}</h4>
                <button className={'btn btn-primary'}
                        onClick={() => dispatch({type: 'cart_name/add_one', payload: product.id})}>Add to cart
                </button>
                <button className={'btn btn-secondary'} onClick={() => {
                    dispatch({type: 'cart_name/minus_one', payload: product.id})
                }}>Remove one
                </button>
            </div>


        </div>
    </>
}
