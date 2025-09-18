import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Header from './Header'


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout