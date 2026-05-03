import React from 'react'
import Navbar from './assets/Components/Navbar'
import Banner from './assets/Components/Banner'
import Experience from './assets/Components/Experience/Experience'
import Service from './assets/Components/Service/Service'


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Experience />
       <Service/>
      </div>
      
    </>
  )
}

export default App
