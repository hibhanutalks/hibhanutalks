import React from 'react'

const SocialWidget = () => {
  return (
    <div className="tc-widget-social-style1">
      <p className="color-000 text-uppercase mb-30 ltspc-1 lh-2">stay connected</p>
      <div className="content">
        <a href="#" className="social-card">
          <div className="icon facebook-icon">
            <i className="lab la-facebook-f"></i>
          </div>
          <h6>1.5M</h6>
        </a>
        <a href="#" className="social-card">
          <div className="icon twitter-icon">
            <i className="lab la-twitter"></i>
          </div>
          <h6>920K</h6>
        </a>
        <a href="#" className="social-card">
          <div className="icon insta-icon">
            <i className="lab la-instagram"></i>
          </div>
          <h6>25.7K</h6>
        </a>
        <a href="#" className="social-card mb-0">
          <div className="icon youtube-icon">
            <i className="lab la-youtube"></i>
          </div>
          <h6>1.5M</h6>
        </a>
        <a href="#" className="social-card mb-0">
          <div className="icon spotify-icon">
            <i className="lab la-spotify"></i>
          </div>
          <h6>1.5M</h6>
        </a>
      </div>
    </div>
  )
}

export default SocialWidget
