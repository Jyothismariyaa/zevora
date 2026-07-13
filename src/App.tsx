import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhatWeBuild from './components/WhatWeBuild'
import Philosophy from './components/Philosophy'
import WhyZevora from './components/WhyZevora'
import WorkWithUs from './components/WorkWithUs'
import Vision from './components/Vision'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhatWeBuild />
        <Philosophy />
        <WhyZevora />
        <WorkWithUs />
        <Vision />
      </main>
      <Footer />
    </>
  )
}
