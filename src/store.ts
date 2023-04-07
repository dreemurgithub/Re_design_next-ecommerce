import {configureStore, createSlice, combineReducers} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {reducer} from "next/dist/client/components/router-reducer/router-reducer";


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
    a: 2,
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
        add_amount: (state: CartState
                     ,action: PayloadAction<number>
        ) => {
            state['c'] +=1
            console.log(action)
        },
        test : (state:CartState)=>{
            state.a +=1
            state.b +=1
            state.c +=1
            state.d +=1
            state.e +=1
            state.f +=1
            state.g +=1
            state.h +=1
            console.log(state)
        }

    },
})
export const store = configureStore({
    reducer: {
        cart: cartSlide.reducer
    }
})
export const {add_amount,test} = cartSlide.actions
