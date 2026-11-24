import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'


export default function Categories() {
  return (
    <div className='py-15 px-30 cat'>
      <h6 className='uppercase font-bold text-blue-700 '>explore</h6>
      <p className='text-white text-4xl pt-3 font-semibold'>Shop by <span className='text-blue-700'>Category</span></p>
      <p className='text-gray-500 py-4 par'>View all categories →</p>

      <div className="category-grid">
        <article class="category">
          <div class="category-img suv"></div>
          <div>
            <h3 className='text-2xl font-bold text-white'>SUV</h3>
            <p>120+ Vehicles</p>
          </div>
        </article>
        <article class="category">
          <div class="category-img sedan"></div>
          <div>
            <h3 className='text-2xl font-bold text-white'>Sedan</h3>
            <p>150+ Vehicles</p>
          </div>
        </article>
        <article class="category">
          <div class="category-img coupe"></div>
          <div>
            <h3 className='text-2xl font-bold text-white'>Coupe</h3>
            <p>90+ Vehicles</p>
            </div>
          </article>
        <article class="category">
          <div class="category-img sports"></div>
          <div>
            <h3 className='text-2xl font-bold text-white'>Sports</h3>
            <p>80+ Vehicles</p>
          </div>
        </article>
        <article class="category">
          <div class="category-img electric"></div>
          <div>
            <h3 className='text-2xl font-bold text-white'>Electric</h3>
            <p>60+ Vehicles</p>
          </div>
        </article>
      </div>
    </div>
  )
}
