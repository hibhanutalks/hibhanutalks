import React from 'react';
import logoHome1 from '../../public/assets/img/logo_home1.png';
import logoHome1Lt from '../../public/assets/img/logo_home1_lt.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1">
      <div className="container mx-auto p-0">
        <div className="mob-nav-toggles flex items-center justify-between">
          <button
            className="navbarList-icon me-lg-5"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span></span>
            <span></span>
          </button>
          <a href="#" className="logo-brand block lg:hidden w-1/2 my-4">
            <img src={logoHome1} alt="" className="dark-none inline" />
            <img src={logoHome1Lt} alt="" className="light-none inline" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                homes
              </a>
              <ul className="dropdownMenu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="home-default.html">home default</a></li>
                <li><a className="dropdown-item" href="home-technology.html">home technology</a></li>
                <li><a className="dropdown-item" href="home-gaming.html">home gaming</a></li>
                <li><a className="dropdown-item" href="home-food.html">home food</a></li>
                <li><a className="dropdown-item" href="home-bussiness.html">home business</a></li>
                <li><a className="dropdown-item" href="home-politic.html">home politic</a></li>
                <li><a className="dropdown-item" href="home-nft.html">home NFT</a></li>
                <li><a className="dropdown-item" href="home-sport.html">home sport</a></li>
                <li><a className="dropdown-item" href="home-cars.html">home cars</a></li>
                <li><a className="dropdown-item" href="home-10.html">original</a></li>
                <li><a className="dropdown-item" href="rtl-home-sport.html">home sport RTL</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdownMenu" aria-labelledby="navbarDropdown2">
                <li><a className="dropdown-item" href="page-blog.html">Blog</a></li>
                <li><a className="dropdown-item" href="page-author.html">authors</a></li>
                <li><a className="dropdown-item" href="page-author-details.html">author details</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Single posts
              </a>
              <ul className="dropdownMenu" aria-labelledby="navbarDropdown3">
                <li><a className="dropdown-item" href="page-single-post-creative.html">single post creative</a></li>
                <li><a className="dropdown-item" href="page-single-post-features.html">single post features</a></li>
                <li><a className="dropdown-item" href="rtl-page-single-post-creative.html">single post creative RTL</a></li>
                <li><a className="dropdown-item" href="rtl-page-single-post-features.html">single post features RTL</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdownMenu" aria-labelledby="navbarDropdown4">
                <li><a className="dropdown-item" href="page-about.html">About</a></li>
                <li><a className="dropdown-item" href="page-team.html">Team</a></li>
                <li><a className="dropdown-item" href="page-product.html">Product</a></li>
                <li><a className="dropdown-item" href="page-404.html">404 page</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="page-contact.html">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="page-shop.html">
                shop
                <small className="hot">hot</small>
              </a>
            </li>
          </ul>
          <div className="nav-side flex">
            <a href="#" className="icon-link">
              <i className="la la-user fs-4"></i>
            </a>
            <a href="#" className="icon-link noti-dot">
              <i className="la la-shopping-bag fs-4"></i>
            </a>
            <a href="#" className="icon-link search-btn-style1">
              <i className="la la-search fs-4 sOpen-btn"></i>
              <i className="la la-close fs-4 sClose-btn"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
