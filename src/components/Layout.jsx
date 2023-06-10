import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
