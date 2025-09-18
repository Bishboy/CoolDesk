import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router'
import "../App.css"
import "../component/Home/Waxy.css"
import ScrollToTop from '@/ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <ScrollToTop />
      <main className='min-h-screen' >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout