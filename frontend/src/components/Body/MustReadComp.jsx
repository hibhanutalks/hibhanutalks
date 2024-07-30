import React, { useEffect, useState } from 'react'

const MustReadComp = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fetch JSON data from the data folder
      fetch('/data/json/mustRead.json')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  return (
    <section className="tc-must-read-style1 bg-gray2 p-30">
    <p className="color-000 text-uppercase mb-20 ltspc-1">
      <a href="page-blog.html">Must Read</a> <i className="la la-angle-right ms-1"></i>
    </p>
    <div className="tc-post-grid-default border-1 border-bottom brd-gray pb-30">
      {posts.length > 0 && (
        <div className="item">
          <div className="row">
            <div className="col-lg-5">
              <div className="img img-cover th-230">
                <img src={posts[0].image} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="content">
                <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">{posts[0].category}</a>
                <h3 className="title mb-15">
                  <a href={posts[0].link}>{posts[0].title}</a>
                </h3>
                <div className="text color-666">
                  {posts[0].description}
                </div>
                <div className="meta-bot lh-1 mt-50">
                  <ul className="d-flex">
                    <li className="date me-4">
                      <a href="#"><i className="la la-calendar me-1"></i> {posts[0].date}</a>
                    </li>
                    <li className="author me-4">
                      <a href="#"><i className="la la-user me-1"></i> by {posts[0].author} </a>
                    </li>
                    <li className="comment">
                      <a href="#"><i className="la la-comment me-1"></i> {posts[0].comments} Comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="tc-post-grid-default pt-30">
      <div className="row">
        {posts.slice(1).map(post => (
          <div key={post.id} className="col-lg-4 border-1 border-end brd-gray">
            <div className="item">
              <div className="img img-cover th-180 mb-20">
                <img src={post.image} alt="" />
              </div>
              <div className="content">
                <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-1">{post.category}</a>
                <h4 className="title ltspc--1">
                  <a href={post.link} className="hover-underline">
                    {post.title}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default MustReadComp
