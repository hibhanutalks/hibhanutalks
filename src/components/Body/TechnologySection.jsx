import React, { useEffect, useState } from 'react';

const TechnologySection = () => {
  const [data, setData] = useState({ main: {}, items: [] });

  useEffect(() => {
    // Fetch JSON data from the data folder
    fetch('/data/json/technologyData.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="tc-technology-style1 pt-50">
      <p className="color-000 text-uppercase mb-30 ltspc-1">
        <a href="page-blog.html">technology</a> <i className="la la-angle-right ms-1"></i>
      </p>
      <div className="tc-post-overlay-default">
        <div className="img th-600 img-cover">
          <img src={data.main.image} alt="Main Technology Post" />
          <div className="tags">
            <a href="#">technology</a>
          </div>
        </div>
        <div className="content ps-40 pe-40 pb-40">
          <h2 className="title mb-30">
            <a href={data.main.link}>{data.main.title}</a>
          </h2>
          <div className="meta-bot lh-1">
            <ul className="d-flex">
              <li className="date me-5">
                <a href="#"><i className="la la-calendar me-2"></i> {data.main.date}</a>
              </li>
              <li className="author me-5">
                <a href="#"><i className="la la-user me-2"></i> by {data.main.author}</a>
              </li>
              <li className="comment">
                <a href="#"><i className="la la-comment me-2"></i> {data.main.comments}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tc-post-list-style2">
        <div className="items">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`item pt-30 pb-30 mt-30 ${index === 1 ? 'border-0 bg-gray1 p-3' : 'border-1 border-top border-bottom brd-gray'}`}
            >
              <div className="row">
                <div className="col-lg-4">
                  <div className="img th-200 img-cover">
                    <img src={item.image} alt={`Technology Post ${index + 1}`} />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="content">
                    <div className={`news-cat color-999 fsz-13px text-uppercase mb-3 ${item.category === 'Sponsored Content' ? 'text-danger' : ''}`}>
                      <a href="#">{item.category}</a>
                    </div>
                    <h3 className="title ltspc--1">
                      <a href={item.link}>{item.title}</a>
                    </h3>
                    <div className="meta-bot lh-1 mt-80">
                      <ul className="d-flex">
                        {item.date && (
                          <li className="date me-5">
                            <a href="#"><i className="la la-calendar me-2"></i> {item.date}</a>
                          </li>
                        )}
                        {item.author && (
                          <li className="author me-5">
                            <a href="#"><i className="la la-user me-2"></i> by {item.author}</a>
                          </li>
                        )}
                        {item.comments && (
                          <li className="comment">
                            <a href="#">{item.comments}</a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologySection
