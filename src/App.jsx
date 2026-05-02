import React from 'react'
import Navbar from './assets/Components/Navbar'
import Banner from './assets/Components/Banner'
import Experience from './assets/Components/Experience/Experience'
import Services from './assets/Components/Services/Services'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Experience />
        <Services/>
      </div>
      
    </>
  )
}

export default App
