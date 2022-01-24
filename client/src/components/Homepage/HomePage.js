import React, { useState } from 'react'
import HomeNav from './Navbar/HomeNav'
import Sidebar from './Sidebar/Sidebar'
import HeroSection from './HeroSection/HeroSection'
import InfoSection from './InfoSection'
import Features from './Features'
import Footer from './Footer'

import { homeObjOne, homeObjTwo, homeObjThree } from './InfoSection/Data'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNav toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Features />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default HomePage
