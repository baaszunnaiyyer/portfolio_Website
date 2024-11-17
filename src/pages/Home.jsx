import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import StickySection from '../Components/StickySection'
import CenterSection from '../Components/CenterSection'
import HorizontalScroll from '../Components/HorizontalScroll'
import ContactMe from '../Components/Contact'
import Loader from '../Components/Loader/Loader'



const Home = () => {
  return (
    <>
      <Loader/>
      <NavBar/>
      <Hero l1="Strategic," l2="Creative Solutions."/>
      <About/>
      <StickySection/>
      <CenterSection/>
      <HorizontalScroll/>
      <ContactMe/>
    </>
  )
}

export default Home