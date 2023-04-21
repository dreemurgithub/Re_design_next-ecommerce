import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import Link from 'next/link'

export default function Product_id() {
    const [product, set_product] = useState({id: 'not found', url: 'not found', price: 0, content: 'not found',props1: 0,propp2:'',props3:true,props4: false, props5: '',props6:'',prop8:0,prop9:''})
    const router = useRouter()
    const {id} = router.query
    const amount = useSelector((state: any) => state['cart'][`${id}`])
    const dispatch = useDispatch()

    const [post_list, setlist] = useState([])
    const value: any = useSelector(state => state)
    const coupon = useSelector((state:any)=>state.coupon)

    useEffect(() => {
        // window.location.reload()
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => set_product(data))
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setlist(data))
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
        {/*<Link href={'https://www.adoredvintage.com/collections/dresses/products/feminine-vintage-inspired-beige-floral-printed-tiered-maxi-sundress'}>Design like this</Link>*/}
        <div>

        </div>
        <div id='product_page'>

            <div style={{display: 'flex'}}>
                <div style={{width: '70px', display: 'grid', overflowY: 'scroll'}}>
                    <img onClick={display_image} style={{cursor: 'pointer'}} className='imgage_1'
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
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
                         src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0"
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
            <div style={ { textAlign: 'justify',padding:'16px'} }>
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
                <button className={'btn btn-primary'}
                        onClick={() => dispatch({type: 'cart_name/add_one', payload: product.id})}>Add to cart
                </button>
                <button className={'btn btn-secondary'} onClick={() => {
                    dispatch({type: 'cart_name/minus_one', payload: product.id})
                }}>Remove one
                </button>
                <button type="button" className="btn btn-danger" onClick={()=>dispatch({type: 'coupon_name/add'})}>Coupon</button>
                <button type="button" className="btn btn-light" onClick={()=>dispatch({type: 'coupon_name/remove'})}><s>coupon</s> </button>

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
                        <td><s>{product.price}$</s></td>
                        <td><b style={{color:'red'}}>{product.price*(100-coupon)/100}$</b></td>
                        <td><s>{product.price* amount}$</s></td>
                        <td>{Math.round(product.price*(100-coupon)/100 * amount*10)/10}$</td>
                    </tr>

                    </tbody>
                </table>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Description 1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit officia quia
                            repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure, molestiae nam
                            natus officia quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit
                            officia quia repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure,
                            molestiae nam natus officia quam?</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Description 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit officia quia
                            repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure, molestiae nam
                            natus officia quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit
                            officia quia repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure,
                            molestiae nam natus officia quam?</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Description 3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit officia quia
                            repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure, molestiae nam
                            natus officia quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea eius odit
                            officia quia repellat repudiandae. Alias aut consectetur corporis dolores eaque explicabo hic iure,
                            molestiae nam natus officia quam?</div>
                    </div>
                </div>
            </div>
            <div>

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
                        <td>{product.props1}</td>
                        <td>{product.propp2}</td>
                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type 2</th>
                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                        <td>{product.props5}</td>
                        <td>{product.props6}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type 3</th>
                        <td>{product.prop8}</td>
                        <td>{product.prop9}</td>
                        <td>No</td>
                    </tr>
                    </tbody>
                </table>

                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                    </button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content " >
                            <div className="modal-header text-center bg-danger" >
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body" style={{ height:'70vh',overflowX:'scroll' }}>

                                <table className="table table-striped" >
                                    <thead>
                                    <tr>
                                        <th scope="col">Infor 1</th>
                                        <th scope="col">Infor 2</th>
                                        <th scope="col">Infor 3</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{product.props1}</td>
                                        <td>{product.propp2}</td>
                                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                                        <td>{product.props5}</td>
                                        <td>{product.props6}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.prop8}</td>
                                        <td>{product.prop9}</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props1}</td>
                                        <td>{product.propp2}</td>
                                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                                        <td>{product.props5}</td>
                                        <td>{product.props6}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.prop8}</td>
                                        <td>{product.prop9}</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props1}</td>
                                        <td>{product.propp2}</td>
                                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                                        <td>{product.props5}</td>
                                        <td>{product.props6}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.prop8}</td>
                                        <td>{product.prop9}</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props1}</td>
                                        <td>{product.propp2}</td>
                                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                                        <td>{product.props5}</td>
                                        <td>{product.props6}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.prop8}</td>
                                        <td>{product.prop9}</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props1}</td>
                                        <td>{product.propp2}</td>
                                        <td>{product.props3 ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.props4 ? 'Yes' : 'No'}</td>
                                        <td>{product.props5}</td>
                                        <td>{product.props6}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.prop8}</td>
                                        <td>{product.prop9}</td>
                                        <td>No</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer" style={{display:'flex',justifyContent:'center'}}>
                                <div className="d-grid gap-2" style={{ width:'40em' }}>
                                    <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      X  Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </>
}
