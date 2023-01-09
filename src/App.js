import React from 'react'
import "./App.css"
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Service from './components/Service/Service'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Service />
      <Pricing />

      <div className='desktop-view'>
        <About />
        <Footer />
      </div>
        <h6>Varaluae 2021 @ All rights Reseverd</h6>
    </div>
  )
}

export default App
