import React from 'react'
import HeroSection from '@/components/HeroSection'
import About from '@/components/AboutUs'
import StatsSection from '@/components/StatsSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <StatsSection />
      <Services />
      <Testimonials />
      <CallToAction />
  
    </div>
  )
}

export default page
