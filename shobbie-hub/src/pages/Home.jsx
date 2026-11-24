import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
// import Main from '../components/main'

export default function Home(){
  return (
    <div>
      {/* <Navbar /> */}
      <Hero/>
      {/* <Main/> */}

      {/* Categories  */}
      <Categories/>

      {/* discover  */}
      <Discover/>

      {/* footer  */}
      <Footer/>
    </div>
  )
}
