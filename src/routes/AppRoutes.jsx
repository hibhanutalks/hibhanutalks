import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import Home from '../components/Home';
import Aboutus from '../components/Aboutus'
import Contactus from '../components/ContactUs'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="index.html" element={<Home />} />
        <Route path="about-us.html" element={<Aboutus />} />
        <Route path="contact-us.html" element={<Contactus />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
