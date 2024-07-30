import React from 'react';

const PodcastWidget = () => {
  return (
    <div className="tc-widget-podcast">
      <p className="color-000 text-uppercase mb-30 ltspc-1 lh-2">
        new podcasts <i className="la la-angle-right ms-1"></i>
      </p>
      <div className="main-card">
        <div className="img img-cover">
          <img src="assets/img/pdc1.png" alt="Podcast Cover" />
        </div>
        <div className="info pt-10">
          <small>2 Hours ago</small>
          <h5>
            <a href="#" className="title">
              Start A New Day with A Smile
            </a>
          </h5>
        </div>
        <audio controls className="audio">
          <source src="assets/img/audio1.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div className="podcast-list">
        <div className="item">
          <a href="#" className="img">
            <img src="assets/img/pdc1.png" alt="Podcast Thumbnail" />
          </a>
          <div className="info">
            <small>3 Hours ago</small>
            <h6 className="title">
              <a href="#">Release energy and activity</a>
            </h6>
          </div>
        </div>
        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s"
            data-fancybox="video"
            className="img img-vid"
          >
            <img src="assets/img/pdc2.png" alt="Podcast Thumbnail" />
            <i className="ion-arrow-right-b play-icon"></i>
          </a>
          <div className="info">
            <small>3 Hours ago</small>
            <h6 className="title">
              <a href="#">Cafe, Chill and focus to study</a>
            </h6>
          </div>
        </div>
        <div className="item mb-0">
          <a href="#" className="img">
            <img src="assets/img/pdc3.png" alt="Podcast Thumbnail" />
          </a>
          <div className="info">
            <small>3 Hours ago</small>
            <h6 className="title">
              <a href="#">A long day mood</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastWidget;
