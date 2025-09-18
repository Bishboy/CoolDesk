import React from 'react'
import HeroSection from '@/component/Home/HeroSection'
import Header from '@/component/Header'
import Articles from '@/component/Home/Articles'
const Home = () => {
  return (
    <div className="relative bg-[#5236CB]  text-white ">
      <Header />
      <HeroSection />
      <Articles />
    </div>
  )
}

export default Home