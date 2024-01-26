import React from 'react'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='max-w-[1920px] m-auto'>
      <NavigationBar />
      <Hero />
      <BlogSection />
      <Footer />
      </div>
  )
}

export default page