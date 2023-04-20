import Link from 'next/link'
import {useEffect, useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react"
import React from 'react';
import {useDispatch} from "react-redux";

export default function Navbar({children}: { children: React.ReactNode }) {
    const {data: session , status } = useSession()
    const dispatch = useDispatch()

    return <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={ ()=>dispatch({type: 'menu_show/hid_all'}) }
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => {
                                if (session === null || session === undefined) signIn()
                                else signOut()
                            }} href='#'><b>{(session === null || session === undefined) ? 'Signin' : 'Signout'}</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><b>
                                {status}!</b></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href='/order'>Order</Link>
                        </li>
                        <li className="nav-item dropdown " onClick={ ()=>dispatch({type: 'menu_show/product'}) }>
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                Products
                            </Link>
                            <ul style={ { display:'none' } } className="dropdown-menu">
                            </ul>
                        </li>
                        <li className="nav-item dropdown" onClick={ ()=>dispatch({type: 'menu_show/article'}) }>
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                Articles
                            </Link>
                            <ul className="dropdown-menu" style={ { display:'none' } }>
                            </ul>
                        </li>

                        <li className="nav-item dropdown" onClick={ ()=>dispatch({type: 'menu_show/server'}) }>
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                ServerSide
                            </Link>
                            <ul className="dropdown-menu" style={ { display:'none' } }>
                            </ul>
                        </li>
                        {children}

                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
