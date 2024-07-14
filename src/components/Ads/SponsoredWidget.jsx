import React from 'react';

const SponsoredWidget = () => {
  return (
    <div className="tc-widget-sponsored-style1">
      <div className="img img-cover">
        <img src="assets/img/sponsored/1.png" alt="Sponsored Content" />
      </div>
      <div className="info pt-10">
        <div className="spon-cat">Sponsored Content</div>
        <h6 className="title">
          <a href="#">
            Dile & Kamine Soap from pure natura 100%
          </a>
        </h6>
        <a href="#">
          <small>
            dileandkamina.com <i className="las la-external-link-square-alt ms-2"></i>
          </small>
        </a>
      </div>
    </div>
  );
};

export default SponsoredWidget;
