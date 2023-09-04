import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Prodhero from '../Bright/Prodhero'
import Hrwelcom from '../Hrwelcom/Hrwelcom'
import Join from '../Join/Join'
import Slide from '../Slide/Slide'
import Vision from '../Vision/Vision'


const Homescreen = () => {
  return (
    <div>
        <Header />
        
        {/* <Hero /> */}
        <Prodhero />
        <br />
        <br />
        <br />
        <Vision />
        <br />
        <br />
        <br />
        <br />
        <Hrwelcom />
        <br />
        <Slide />
        <br />
        <br />
        <Join />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default Homescreen
