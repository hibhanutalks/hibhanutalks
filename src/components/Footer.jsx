import React from 'react'
import Movetotop from './Movetotop'
import MiniFooter from './MiniFooter'
import SubscribeBanner from './SubscribeBanner';
import ContactUs from './ContactUs';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer-style1">
      <div class="container">
       <SubscribeBanner />
       <ContactUs />
       <MiniFooter />
        <div className="foot text-center py-4 border-top border-gray-300">
          <p className="text-sm text-gray-600">
            © {currentYear} Copyrights by <a href="/" className="text-black">hibhanutalks.com</a>. All Rights Reserved. Developed by 
            <a href="#" className="text-black underline"> HiBhanuTalks </a>
          </p>
        </div>
      </div>
      <Movetotop />
    </footer>
  )
}

export default Footer
