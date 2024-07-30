import React from 'react'
import Movetotop from './Movetotop'
import MiniFooter from './MiniFooter'
import SubscribeBanner from './SubscribeBanner';
import ContactUs from './ContactUs';
import { WEBSITE_NAME, WEBSITE_URL, PARENT_WEBSITE_NAME, PARENT_WEBSITE_URL } from '../constants/constants'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer-style1">
      <div class="container">
       <SubscribeBanner />
       {/* <ContactUs /> */}  
       <MiniFooter />
        <div className="foot text-center py-4 border-top border-gray-300">
          <p className="text-sm text-gray-600">
            © {currentYear} Copyrights by <a href={ WEBSITE_URL } className="text-black">{ WEBSITE_NAME }</a>. All Rights Reserved. Developed by 
            <a href={ PARENT_WEBSITE_URL } target="_blank" rel="noopener noreferrer" className="text-black underline"> { PARENT_WEBSITE_NAME } </a>
          </p>
        </div>
      </div>
      <Movetotop />
    </footer>
  )
}

export default Footer
