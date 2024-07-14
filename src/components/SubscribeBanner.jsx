import React from 'react';

const SubscribeBanner = () => {
  return (
    <div className="tc-subscribe-style1">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4">
          <div className="sub-info">
            <h5>Get the best blog stories into your inbox</h5>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="sub-form">
            <div className="form-group">
              <span className="icon">
                <i className="la la-envelope"></i>
              </span>
              <input type="text" className="form-control" placeholder="Enter your email" />
              <button>subscribe</button>
            </div>
            <p className="mt-2 color-666 fsz-13px fst-italic">
              By subscribing, you accepted the our <a href="#" className="text-decoration-underline fst-normal color-000">Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
