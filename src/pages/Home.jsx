import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Specialties from '../sections/Specialties'
import MenuPreview from '../sections/MenuPreview'
import About from '../sections/About'
import FoodGallery from '../sections/FoodGallery'
import Testimonials from '../sections/Testimonials'
import Reservation from '../sections/Reservation'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-main text-white font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <About />
        <MenuPreview />
        <FoodGallery />
        <Reservation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}





