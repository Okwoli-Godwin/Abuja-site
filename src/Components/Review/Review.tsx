import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Reviewhero from './Reviewhero'
import Reviewtext from './Reviewtext'

const Review = () => {
  return (
    <Container>
        <Header />
        <Reviewhero />
        <br />
        <br />
        <Reviewtext />
        <Footer />
    </Container>
  )
}

export default Review

const Container = styled.div`
    
`