import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MiniFooter from '../components/MiniFooter';
import Footer from '../components/Footer';
const Layouts = () => {
  return (
    <div className="layout">
      <Header />
        <main>
            <Outlet />
        </main>
      <MiniFooter />
      <Footer />
    </div>
  )
}

export default Layouts
