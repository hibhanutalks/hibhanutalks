import React from 'react';
import logoHome1 from '../../public/assets/img/logo_home1.png';
import logoHome1Lt from '../../public/assets/img/logo_home1_lt.png';

const MiniHeader = () => {
  return (
    <div className="top-navbar style-1">
      <div className="container mx-auto p-0">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="date-weather mb-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="item flex items-center">
                    <div className="icon me-3 pt-1">
                      <i className="la la-calendar"></i>
                    </div>
                    <div className="inf">
                      <strong>Monday</strong>
                      <p>Nov 25, 2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item flex items-center">
                    <div className="icon me-3 pt-1">
                      <i className="la la-cloud-sun"></i>
                    </div>
                    <div className="inf">
                      <strong>32° deg, Cloudy</strong>
                      <p>New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <a href="#" className="logo-brand hidden lg:block">
              <img src={logoHome1} alt="Logo" className="dark-none" />
              <img src={logoHome1Lt} alt="Logo Light" className="light-none" />
            </a>
          </div>
          <div className="col-lg-4">
            <div className="sub-darkLight">
              <div className="row text-end align-items-center">
                <div className="col-6">
                  <a href="#0" className="text-uppercase fs-6 border-bottom border-1 border-dark subs">
                    <i className="la la-envelope fs-5 me-1"></i>
                    Subscribe
                  </a>
                </div>
                <div className="col-6">
                  <div className="darkLight-btn flex justify-end">
                    <span className="icon active" id="light-icon">
                      <i className="la la-sun"></i>
                    </span>
                    <span className="icon" id="dark-icon">
                      <i className="la la-moon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="nav-subs-card">
                <p className="fsz-16px text-uppercase mb-20">Newsletter</p>
                <div className="sub-form">
                  <div className="form-group flex">
                    <span className="icon">
                      <i className="la la-envelope"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="your email" />
                    <button>subscribe</button>
                  </div>
                  <p className="mt-3 text-gray-600 fsz-12px italic">
                    By subscribing, you accepted our <a href="#0" className="text-gray-700 underline">Policy</a>
                  </p>
                </div>
                <span className="cls">
                  <i className="la la-times"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
