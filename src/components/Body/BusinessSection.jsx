import React, { useEffect, useState } from 'react';

const BusinessSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch JSON data from the data folder
    fetch('/data/json/business.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return null;

  return (
    <section className="tc-business-style1 pt-50 pb-50">
      <p className="color-000 text-uppercase mb-30 ltspc-1">
        <a href="page-blog.html">Business</a> <i className="la la-angle-right ms-1"></i>
      </p>
      <div className="main-blog pb-30 border-1 border-bottom brd-gray">
        <div className="row">
          <div className="col-lg-8 border-1 border-end brd-gray">
            <div className="tc-post-overlay-default">
              <div className="img th-400 img-cover">
                <img src={data.mainPost.image} alt="" />
                <div className="tags">
                  <a href="#">{data.mainPost.category}</a>
                </div>
              </div>
              <div className="content ps-30 pe-30 pb-30">
                <h3 className="title mb-20">
                  <a href={data.mainPost.link}>{data.mainPost.title}</a>
                </h3>
                <div className="meta-bot lh-1">
                  <ul className="d-flex">
                    <li className="date me-5">
                      <a href="#"><i className="la la-calendar me-2"></i> {data.mainPost.date}</a>
                    </li>
                    <li className="author me-5">
                      <a href="#"><i className="la la-user me-2"></i> by {data.mainPost.author}</a>
                    </li>
                    <li className="comment">
                      <a href="#"><i className="la la-comment me-2"></i> {data.mainPost.comments} Comments</a>
                    </li>
                  </ul>
                </div>
                <div className="text color-666">
                  {data.mainPost.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tc-post-list-style2">
              <div className="items">
                {data.bottomPosts.map(post => (
                  <div key={post.title} className="item pb-20">
                    <div className="content">
                      <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-1">{post.category}</a>
                      <h5 className="title ltspc--1">
                        <a href={post.link}>{post.title}</a>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tc-post-list-style2">
        <div className="items">
          <div className="row">
            {data.sidebarPosts.map(post => (
              <div key={post.title} className="col-lg-6">
                <a href={post.link} className="item d-block border-0 pt-30">
                  <div className="row gx-3 align-items-center">
                    <div className="col-4">
                      <div className="img th-90 img-cover">
                        <img src={post.image} alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="content">
                        <div className="news-cat color-999 fsz-13px text-uppercase mb-1">{post.category}</div>
                        <h5 className="title ltspc--1">{post.title}</h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
