import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Journalhero from '../Journalhero/Journalhero'
import Journaltext from '../Journaltext/Journaltext'

const Journal = () => {
  return (
    <div>
        <Header />
        <Journalhero />
        <br />
        <br />
        <Journaltext />
        <Footer />
    </div>
  )
}

export default Journal