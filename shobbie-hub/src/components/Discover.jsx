import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

export default function Discover() {
  return (
  <div>
    <section className="about">
      <div className="about-image"></div>
      <div className="about-copy">
        <h6 className="text-xl font-bold text-blue-700">THE DRIVE X DIFFERENCE</h6>
        <div className='text-white font-bold text-6xl'>
          <h2>More than a dealership.</h2>
          <h2 className='text-blue-700'>A better way to buy.</h2>
        </div>
        <p className='text-white text-xl pt-3'>We combine a curated inventory with transparent pricing, verified vehicles and a premium buying experience from your first click to the moment your car arrives.</p>
        <div className="about-stats">
          <div className='text-white text-2xl flex flex-col font-bold'>
            12+ <span className='pt-1.5'>Years of trust</span>
          </div>
          <div className='text-white text-2xl flex flex-col font-bold'>
            2,500+ <span className='pt-1.5'>Cars delivered</span>
          </div>
          <div className='text-white text-2xl flex flex-col font-bold'>
            4.9/5 <span className='pt-1.5'>Customer rating</span>
          </div>
        </div>
        <a className="text-white font-bold text-2xl btn-secondary">Discover Our Story →</a>
      </div>
    </section>
  </div>
  )
}
