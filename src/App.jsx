import React, { useRef } from 'react'
import Header from './components/Header'
import './App.css'
import Mainswiper from './components/Mainswiper'
import Section3 from './Section3'
import Section2 from './Section2'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import useScrollSnap from 'react-use-scroll-snap'

const App = () => {
  const scrollRef = useRef(null)
  
  // Initialize the scroll snap hook
  useScrollSnap({ ref: scrollRef, duration: 2000, delay: 50 })
  
  return (
    <div ref={scrollRef} className="scroll-container">
      <Header/>
      <Mainswiper/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

export default App
