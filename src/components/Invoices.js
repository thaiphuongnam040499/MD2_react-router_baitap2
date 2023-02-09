import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header'
export default function Invoices() {
    return (
        <div>
            <Header/>
            <h4 className='text-center'>Invoices</h4>
            <NavLink to={"new"} className='d-flex justify-content-center'>Create New Invoice</NavLink>
            <div className="row">
                <div className='col-1 border-1 border-dark border-end'>
                    <NavLink className='d-block' to={'1'}>Google</NavLink>
                    <NavLink className='d-block' to={'2'}>Apple</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
