import React from 'react'
import HomePage from '../../components/HomePage/HomePage'
import About from '../../components/About/About'
import Servises from '../../components/Servises/Servises'
import Features from '../../components/Features/Features'
import TestMonails from '../../components/Testimonails/TestMonails'
import Contact from '../../components/Contact/Contact'
import PortFolio from '../../components/PortFolio/PortFolio'
import Team from '../../components/Team/Team'
import Pricing from '../../components/Pricing/Pricing'

function HomeP() {
  return (
    <>
<HomePage />
<About/>
<Servises/>
<Features />
<TestMonails />
<PortFolio/>
<Team/>
<Pricing/>
<Contact/>
    </>
  )
}

export default HomeP