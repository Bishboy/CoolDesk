import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router'
import "../App.css"
import "../component/Home/Waxy.css"

const Layout = ({ children }) => {
  return (
    <div className=''>
      <main className='min-h-screen' >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout