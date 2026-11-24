import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

export default function Footer() {
  return (
    <div className='footer text-white'>
      <div>
        <a className="font-bold text-4xl" href="#">Shobbie <span className='text-blue-700'>Motors</span></a>
          <p className='text-xl'>Premium vehicles. Exceptional experience.</p></div>
    <div>
      <h4 className='text-2xl font-bold'>Explore</h4>
      <a href="#vehicles" className='text-xl text-gray-400'>Vehicles</a>
      <a href="#categories" className='text-xl text-gray-400'>Categories</a>
      <a href="#about" className='text-xl text-gray-400'>About</a>
    </div>
    <div >
      <h4 className='text-2xl font-bold'>Contact</h4>
      <p className='text-xl text-gray-400'>+234 800 Shobbie Motors</p>
      <p className='text-xl text-gray-400'>Shobbiemotors@gmail.com</p>
    </div>
    </div>
  )
}
