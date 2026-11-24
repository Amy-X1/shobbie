import React from 'react'
import Background from "../assets/lexus.jpg"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../pages/Home.css'


export default function Hero() {
  return (
    <>
      <div
        className="h-screen hero " id="home">
        {/* <Navbar /> */}
        <div className='hero-content'>
          <h1 className='text-blue-700  font-bold uppercase '>
            premium cars. premium experience.
          </h1>
          <h2 className='text-white text-7xl font-bold uppercase '>
            drive your <span className='text-blue-700'>exception.</span>
          </h2>
          <p className='text-white hero-copy text-xl pt-3 '>
            Discover a carefully selected collection of luxury, performance and everyday vehicles built for people who expect more.
          </p>
          <button className='btn-primary text-xl'>
            <Link>
              Explore Vehicles →
            </Link>
          </button>
        </div>
        <div className='hero-car'></div>
        <div className='hero-glow'></div>
      </div>
      <div class="search-panel">
        <div class="field">
          <label>MAKE</label>
          <select>
            <option>Any Make</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
            <option>Audi</option>
            <option>Porsche</option>
          </select>
        </div>
        <div class="field">
          <label>MODEL</label>
          <select>
            <option>Any Model</option>
            <option>X5</option>
            <option>GLE</option>
            <option>Q7</option>
            <option>911</option>
          </select>
        </div>
        <div class="field">
          <label>BODY TYPE</label>
          <select>
            <option>Any Body Type</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Coupe</option>
            <option>Sports</option>
          </select>
        </div>
        <div class="field">
          <label>PRICE RANGE</label>
          <select>
            <option>Any Price</option>
            <option>Under $50k</option>
            <option>$50k–$100k</option>
            <option>$100k+</option>
          </select>
        </div>
        <button class="search-btn" onclick="filterCars()">⌕ Search</button>
      </div>
      <section class="benefits">
        <div>
          <b>◇</b>
          <span><h4>Quality Guaranteed</h4>
            Inspected and certified by experts
          </span>
        </div>
        <div>
          <b>✦</b>
          <span><h4>Best Price Promise</h4>
            Competitive pricing always</span>
        </div>
        <div>
          <b>◌</b>
          <span><h4>Easy Financing</h4>
            Flexible options for your budget</span>
        </div>
        <div>
          <b>▣</b>
          <span><h4>Nationwide Delivery</h4>
          Delivered to your doorstep</span>
        </div>
      </section>
    </>
  )
}
