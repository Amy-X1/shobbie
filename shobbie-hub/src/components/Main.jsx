import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

export default function Main() {
  return (
    <>
      <div id="categories" className="section">
        <div className="section-head">
          <div><p className="eyebrow">EXPLORE</p>
            <h2>Shop by <span>Category</span></h2>
          </div>
          <a href="#vehicles">View all categories →</a>
        </div>
        <div className="category-grid">
          <article className="category"><div className="category-img suv"></div><div><h3>SUV</h3><p>120+ Vehicles</p></div></article>
          <article className="category"><div className="category-img sedan"></div><div><h3>Sedan</h3><p>150+ Vehicles</p></div></article>
          <article className="category"><div className="category-img coupe"></div><div><h3>Coupe</h3><p>90+ Vehicles</p></div></article>
          <article className="category"><div className="category-img sports"></div><div><h3>Sports</h3><p>80+ Vehicles</p></div></article>
          <article className="category"><div className="category-img electric"></div><div><h3>Electric</h3><p>60+ Vehicles</p></div></article>
        </div>
      </div>


    </>
  )
}
