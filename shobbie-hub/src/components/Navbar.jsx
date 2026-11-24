import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
   <>

    <nav className="bg-black text-white px-30 py-5 flex justify-between items-center fixed w-full border-b-2 border-gray-700 z-100 top-0">
      <div className="flex items-center justify-center">
        <Link to="/" className="text-3xl font-bold">Shobbie
         <span className="text-blue-700"> Motors</span></Link>
        </div>
        <div className="ml-4 space-x-20 flex justify-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      <div className="space-x-4 text-xl">
        {/* <Link to="/login" className="bg-transparent border-2 border-white py-2 px-4 rounded-md">Login</Link> */} 
        <Link to="/signup" className="btn-secondary">♡</Link>
        <Link to="/signup" className="btn-secondary">Create an account </Link>
        
      </div>
    </nav>

     </>
  )
}
