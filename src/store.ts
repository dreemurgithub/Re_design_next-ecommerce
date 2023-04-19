import {configureStore, createSlice, combineReducers} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
// import {reducer} from "next/dist/client/components/router-reducer/router-reducer";


export interface CartState {
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number
}

const initial_cart = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0
} as CartState

const cartSlide = createSlice({
        name: 'cart_name',
        initialState: initial_cart,
        reducers: {

            add_one: (state: any , action: PayloadAction<string>) => {
                const payload_index = action.payload
                state[payload_index] += 1
                localStorage.setItem('cart',JSON.stringify(state))
            },
            minus_one: (state: any , action: PayloadAction<string>) => {
                const payload_index = action.payload
                if(state[payload_index]> 0) state[payload_index] += -1
                localStorage.setItem('cart',JSON.stringify(state))

            },
            load_refresh : (state: any)=>{
                if (localStorage.cart!==undefined && localStorage.cart!==null ) {
                    const item = JSON.parse(localStorage.cart)
                    const list = Object.keys(item)
                    list.forEach(el=>state[el] = item[el])
                }
            },
        }
    }
)
const couponSlide = createSlice({
    name: 'coupon_name',
    initialState : 0,
    reducers : {
        add : (state:any)=> state = 10,
        remove : (state:any)=> state = 0,
    }
})

const total = createSlice({
    name: 'total_cart',
    initialState : 0,
    reducers : {
        total_count : (state:number,action: PayloadAction<number>)=> state = action.payload
    }
})
const menu = createSlice({
    name: 'menu_show' ,
    initialState : ['none','none','none'],
    reducers : {
        server : (state:any)=> {
            if((state[0]==='none' && state[1]==='none'&& state[2]==='none') || (state[0]==='block' || state[1]==='block'))  {
                state[0] = 'none'
                state[1] = 'none'
                state[2] = 'block'
            }
            else {
                state[0] = 'none'
                state[1] = 'none'
                state[2] = 'none'
            }


        },
        article : (state:any)=> {
            if((state[0]==='none' && state[1]==='none'&& state[2]==='none')|| (state[0]==='block' || state[2]==='block' ) ) {
                state[0] = 'none'
                state[1] = 'block'
                state[2] = 'none'
            }
            else{
                state[0] = 'none'
                state[1] = 'none'
                state[2] = 'none'
            }
        },
        product : (state:any)=> {
            if((state[0]==='none' && state[1]==='none'&& state[2]==='none')|| state[1]==='block' || state[2]==='block' ) {
                state[0] = 'block'
                state[1] = 'none'
                state[2] = 'none'
            }
            else {
                state[0] = 'none'
                state[1] = 'none'
                state[2] = 'none'
            }

        },
        hid_all :(state:any)=> {
            state[0] = 'none'
            state[1] = 'none'
            state[2] = 'none'
        }
    }
})

export const store = configureStore({
    // https://stackoverflow.com/questions/62966863/a-case-reducer-on-a-non-draftable-value-must-not-return-undefined
    // TODO read this, basically how to use redux with primitive state(no {} ,just => state=1 ||  => state = 'a')
    // TODO read update session from client to server https://next-auth.js.org/getting-started/client#refetch-interval
    reducer: {
        cart: cartSlide.reducer,
        coupon: couponSlide.reducer,
        total : total.reducer,
        menu: menu.reducer
    }
})
// export const {add_amount, test} = cartSlide.actions
