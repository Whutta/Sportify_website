import './index.css'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/home_page/view/navbar'
import Hero from './components/home_page/view/hero'
import Carousel from './components/home_page/view/carousel'
import Services from './components/home_page/view/services'
import MemberPrice from './components/home_page/view/member_price'
import ContactUs from './components/home_page/view/contact_us'
import Footer from './components/home_page/view/footer'
import ContactView from './components/contact_page/view/contact_view'
import MembershipView from './components/membership/view/membership_view'

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen w-full">
            <div className="relative min-h-screen -mt-20">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero_bg.jpeg')" }}
              />
              <div className="absolute inset-0 bg-black/80" />
              <div className="relative z-10 h-full pb-10">
                <Hero />
              </div>
            </div>
            <Carousel />
            <Services />
            <div id="member-pricing">
              <MemberPrice />
            </div>
            <div id="contact">
              <ContactUs />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/membership" element={<MembershipView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
