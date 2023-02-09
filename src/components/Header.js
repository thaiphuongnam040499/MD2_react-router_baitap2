import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className="App my-5">
      <img src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'></img>
      <h1 className='d-flex justify-content-center text-danger'>Rikkei Academy</h1>
      <NavLink to={'/invoices'}  className='px-2 border-end border-dark'>Invoices</NavLink>
      <NavLink to={'/expenses'}  className='px-2'>Expenses</NavLink>
    </div>
  )
}
