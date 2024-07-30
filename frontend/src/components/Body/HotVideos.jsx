import React, { useEffect, useState } from 'react';

const HotVideos = () => {
    const [data, setData] = useState({ popular: { slider: {}, sideVideos: [] }, latest: { slider: {}, sideVideos: [] } });
    const [activeTab, setActiveTab] = useState('popular');
  
    useEffect(() => {
      // Fetch JSON data from the data folder
      fetch('/data/json/hotVideosData.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderSideVideos = (videos) => (
        videos.map((video, index) => (
          <div key={index} className={`item ${index % 2 === 0 ? 'mb-40' : ''}`}>
            <div className="img img-cover th-180">
              <img src={video.image} alt={`Video ${index + 1}`} />
              <a href={video.videoLink} data-lity className="video_icon icon-60">
                <i className="ion-play"></i>
              </a>
            </div>
            <div className="content pt-20">
              <a href="#" className="news-cat text-white fsz-13px text-uppercase mb-1 fw-lighter">
                {video.category}
              </a>
              <h4 className="title ltspc--1 text-white">
                <a href={video.link}>{video.title}</a>
              </h4>
            </div>
          </div>
        ))
      );

  return (
 <section className="tc-hot-videos-style1 pt-30 pb-50 parallaxie">
      <div className="container">
        <div className="content">
          <div className="section-head">
            <p className="text-white text-uppercase ltspc-1">
              hot videos LAST WEEK <i className="la la-angle-right ms-1"></i>
            </p>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'popular' ? 'active' : ''}`}
                  id="pills-Popular-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Popular"
                  type="button"
                  role="tab"
                  aria-controls="pills-Popular"
                  aria-selected={activeTab === 'popular'}
                  onClick={() => setActiveTab('popular')}
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'latest' ? 'active' : ''}`}
                  id="pills-Latest-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Latest"
                  type="button"
                  role="tab"
                  aria-controls="pills-Latest"
                  aria-selected={activeTab === 'latest'}
                  onClick={() => setActiveTab('latest')}
                >
                  Latest
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className={`tab-pane fade ${activeTab === 'popular' ? 'show active' : ''}`} id="pills-Popular" role="tabpanel" aria-labelledby="pills-Popular-tab">
              <div className="row">
                <div className="col-lg-9 border-1 border-end brd-light">
                  <div className="tc-video-slider1">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="slider-content">
                            <p className="sub-title">featured, video</p>
                            <h3 className="title">
                              <a href={data.popular.slider.link}>{data.popular.slider.title}</a>
                            </h3>
                            <div className="meta-bot lh-1">
                              <ul className="d-flex">
                                <li className="date me-5">
                                  <a href="#"><i className="la la-calendar me-2"></i> {data.popular.slider.date}</a>
                                </li>
                                <li className="comment">
                                  <i className="las la-chart-line me-2"></i> {data.popular.slider.views}
                                </li>
                              </ul>
                            </div>
                            <a href={data.popular.slider.videoLink} data-fancybox="" className="play-cont">
                              <i className="ion-play me-3"></i>
                              <span>play <br /> video</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* arrows */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tc-side-video-posts">
                    <p className="text-white text-uppercase ltspc-1 mb-40 lh-2 fsz-13px">videos up next</p>
                    <div className="tc-post-grid-default">
                      {renderSideVideos(data.popular.sideVideos)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'latest' ? 'show active' : ''}`} id="pills-Latest" role="tabpanel" aria-labelledby="pills-Latest-tab">
              <div className="row">
                <div className="col-lg-9 border-1 border-end brd-light">
                  <div className="tc-video-slider1">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="slider-content">
                            <p className="sub-title">featured, video</p>
                            <h3 className="title">
                              <a href={data.latest.slider.link}>{data.latest.slider.title}</a>
                            </h3>
                            <div className="meta-bot lh-1">
                              <ul className="d-flex">
                                <li className="date me-5">
                                  <a href="#"><i className="la la-calendar me-2"></i> {data.latest.slider.date}</a>
                                </li>
                                <li className="comment">
                                  <i className="las la-chart-line me-2"></i> {data.latest.slider.views}
                                </li>
                              </ul>
                            </div>
                            <a href={data.latest.slider.videoLink} data-fancybox="" className="play-cont">
                              <i className="ion-play me-3"></i>
                              <span>play <br /> video</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* arrows */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tc-side-video-posts">
                    <p className="text-white text-uppercase ltspc-1 mb-40 lh-2 fsz-13px">videos up next</p>
                    <div className="tc-post-grid-default">
                      {renderSideVideos(data.latest.sideVideos)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotVideos
