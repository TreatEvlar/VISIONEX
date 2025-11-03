import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './pages/Navbar.jsx'
import Footer from './pages/Footer.jsx'
import HeroSection from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber />
      <HeroSection />
      <Footer />
    </>
  )
}

export default App
