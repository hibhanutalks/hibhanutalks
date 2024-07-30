// BlogView.js
import React, { useEffect, useState } from 'react';

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="blog-view">
      {blogs.map(blog => (
        <section key={blog.id} className="tc-main-post-style1 pb-60">
          <div className="container">
            <div className="tc-main-post-title pt-40 pb-40">
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-uppercase mb-15">{blog.tags.join(', ')}</p>
                  <h2 className="title">{blog.title}</h2>
                  <p className="fsz-16px mt-20 color-666">{blog.content}</p>
                </div>
              </div>
            </div>
            <div className="meta-nav pt-30 pb-30 border-top border-1 brd-gray">
              <div className="row">
                <div className="col-lg-6">
                  <div className="author-side color-666 fsz-13px">
                    <div className="author me-40 d-flex d-lg-inline-flex align-items-center">
                      <span className="icon-30 rounded-circle overflow-hidden me-10">
                        <img src="assets/img/colums.png" alt="" />
                      </span>
                      <span>By</span>
                      <a href="#" className="text-decoration-underline text-primary ms-1">{blog.author}</a>
                    </div>
                    <span className="me-40">
                      <a href="#"><i className="la la-calendar me-1"></i> {new Date(blog.date).toLocaleDateString()}</a>
                    </span>
                    <span className="">
                      <a href="#"><i className="la la-comment me-1"></i> {blog.comments} Comments</a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 text-lg-end">
                  <div className="links-side color-000 fsz-13px">
                    <a href="#" className="me-40"><i className="la la-link me-1"></i> Copy Link</a>
                    <a href="#" className="me-40"><i className="la la-bookmark me-1"></i> Bookmark</a>
                    <a href="#"><i className="la la-exclamation-triangle me-1"></i> Report</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tc-main-post-img img-cover mb-50">
              <img src={blog.image} alt={blog.title} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BlogView;
