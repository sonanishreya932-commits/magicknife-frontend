import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div className="bg-[#080d0e] min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-black/20">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              Get in touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-display tracking-[0.2em] text-white uppercase"
            >
              CONTACT <span className="text-primary">US</span>
            </motion.h1>
            <div className="mt-8 mx-auto h-[1px] w-32 bg-primary/50" />
          </div>
        </section>

        {/* Contact Section (Reusing the Home Contact Section) */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
