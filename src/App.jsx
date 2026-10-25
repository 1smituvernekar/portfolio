
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Works from './Components/Works'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Details from './Pages/Details'
import Form from './Components/Form'
import Footer from './Components/Footer'
import WhatsAppButton from './Components/WhatsAppButton'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhatsAppButton/>
              <Works />
              <Form />
            </>
          }
        />

        <Route path="/work" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
