import React, { useState, useEffect } from 'react';

const PopularPosts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/json/popularPosts.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Optional loading state
  }

  const { mainPost, posts } = data;

  return (
    <div className="tc-widget-popular-style1">
      <p className="color-000 text-uppercase mb-20 ltspc-1">Popular Posts</p>
      <div className="main-card">
        <div className="img th-300 img-cover">
          <img src={mainPost.image} alt="Popular Post" />
          <div className="tags">
            {mainPost.tags.map((tag, index) => (
              <a key={index} href="#">{tag}</a>
            ))}
          </div>
        </div>
        <div className="content">
          <h4 className="title">
            <a href="page-single-post-creative.html">{mainPost.title}</a>
          </h4>
          <div className="meta-bot">
            <ul className="d-flex">
              <li className="date me-4">
                <a href="#"><i className="la la-calendar me-1"></i> {mainPost.date}</a>
              </li>
              <li className="comment">
                <a href="#"><i className="la la-comment me-1"></i> {mainPost.comments}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tc-widget-popular-list">
        {posts.map((post, index) => (
          <a key={index} href={post.link} className="item">
            <div className="img img-cover">
              <img src={post.image} alt="Popular Post" />
            </div>
            <div className="info">
              <h6 className="title">
                {post.title}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
