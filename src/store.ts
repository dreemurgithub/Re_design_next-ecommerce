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
        add : (state:any)=> state = 10
    }
})
export const store = configureStore({
    reducer: {
        cart: cartSlide.reducer,
        coupon: couponSlide.reducer
    }
})
// export const {add_amount, test} = cartSlide.actions
