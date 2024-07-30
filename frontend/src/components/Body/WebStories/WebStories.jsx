import React, { useState, useEffect } from 'react';

const WebStories = () => {
  const [stories, setStories] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsPerRow = 6;
  const scrollWidth = 100; // Adjust the scroll width based on the number of items per row

  useEffect(() => {
    fetch('data/json/webstories.json')
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.error('Error fetching web stories:', error));
  }, []);

  const handlePrev = () => {
    setScrollPosition((prevPosition) => (prevPosition - 1 + itemsPerRow) % itemsPerRow);
  };

  const handleNext = () => {
    setScrollPosition((prevPosition) => (prevPosition + 1) % itemsPerRow);
  };

  return (
    <section className="tc-google-stories-style1">
      <div className="container">
        <div className="section-content pt-70 pb-70 border-0 border-bottom brd-gray">
          <p className="color-000 text-uppercase mb-30 ltspc-1">Google Web Stories</p>
          <div className="tc-google-stories-slider1">
            <div className="carousel">
              <button className="carousel-button prev" onClick={handlePrev}>‹</button>
              <div className="carousel-container">
                <div className="carousel-wrapper flex" style={{ transform: `translateX(-${scrollPosition * scrollWidth}%)` }}>
                  {stories.map((story, index) => (
                    <div key={index} className="carousel-slide">
                      <a href={story.link} className="story-item">
                        <div className="img img-cover">
                          <img src={story.image} alt={story.title} />
                        </div>
                        <div className="title fsz-14px color-000 mt-10">{story.title}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carousel-button next" onClick={handleNext}>›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebStories;
