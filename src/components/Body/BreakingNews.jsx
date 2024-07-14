import React, { useState, useEffect } from 'react';

const BreakingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/data/json/breakingNews.json')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching breaking news:', error));
  }, []);

  return (
    <section className="tc-breaking-news-style1 pt-50 pb-50">
      <div className="container">
        <p className="color-999 text-uppercase mb-30 ltspc-1">Breaking News</p>
        <div className="tc-post-grid-default">
          <div className="tc-slider-style1">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {news.map((item, index) => (
                  <div className="swiper-slide" key={index}>
                    <a href={item.link} className="item d-block">
                      <div className="row gx-4 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <h5 className="title">{item.title}</h5>
                            <div className="meta-bot mt-10">
                              <ul>
                                <li className="date"><i className="la la-clock"></i> {item.time}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* arrows */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
