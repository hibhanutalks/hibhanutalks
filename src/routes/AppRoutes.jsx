import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import Home from '../components/Home';
import Aboutus from '../components/Aboutus'
import Contactus from '../components/ContactUs'
import Error from '../components/Error';
import Blog from '../components/Blogs/Blog';
import BlogDetail from '../components/Blogs/BlogDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="index.html" element={<Home />} />
        <Route path="about-us.html" element={<Aboutus />} />
        <Route path="contact-us.html" element={<Contactus />} />

        <Route path="blogs.html" element={<Blog />} />
        <Route path="blog-detail.html" element={<BlogDetail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
