import React from 'react'
import HeroSection from '@/component/Home/HeroSection'
import Header from '@/component/Header'
import Articles from '@/component/Home/Articles'
const Home = () => {
  return (
    <div className="relative bg-[#5236CB]  text-white ">
      <div className=''>
      <Header />
      <HeroSection />
      <Articles />
      </div>
    </div>
  )
}

export default Home