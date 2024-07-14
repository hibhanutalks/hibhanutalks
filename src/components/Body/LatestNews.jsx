import React, { useEffect, useState } from 'react';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        // Replace with your JSON file path or API endpoint
        const response = await fetch('/data/json/latestNews.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading news data: {error.message}</div>;

  return (
    <section className="tc-latest-news-style1">
      <div className="container">
        <div className="section-content pt-50 pb-50 border-bottom border-1 brd-gray">
          <p className="color-000 text-uppercase mb-30 ltspc-1">
            <a href="page-blog.html">Latest News</a>
            <i className="la la-angle-right ms-1"></i>
          </p>
          <div className="row">
            <div className="col-lg-5 border-end brd-gray border-1">
              <div className="tc-post-grid-default">
                {news.length > 0 && news[0] && (
                  <div className="item">
                    <div className="img img-cover th-330">
                      <img src={news[0]?.image} alt="" />
                      {news[0]?.videoLink && (
                        <a href={news[0]?.videoLink} data-lity className="video_icon icon-70">
                          <i className="ion-play"></i>
                        </a>
                      )}
                    </div>
                    <div className="content pt-30">
                      <a href="page-blog.html" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                        {news[0]?.category}
                      </a>
                      <h2 className="title mb-20">
                        <a href={news[0]?.link}>{news[0]?.title}</a>
                      </h2>
                      <div className="text color-666">
                        The social-media company is in discussions to sell itself to Elon, a dramatic turn of events just 11 days after the [...]
                      </div>
                      <div className="meta-bot lh-1 mt-40">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#"><i className="la la-calendar me-2"></i> {news[0]?.date}</a>
                          </li>
                          <li className="author me-5">
                            <a href="#"><i className="la la-user me-2"></i> by {news[0]?.author}</a>
                          </li>
                          <li className="comment">
                            <a href="#"><i className="la la-comment me-2"></i> {news[0]?.comments} Comments</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 border-end brd-gray border-1">
              <div className="tc-post-list-style2">
                <div className="items">
                  {news.slice(1, 7).map((newsItem) => (
                    <div key={newsItem.id} className="item">
                      <div className="row gx-3 align-items-center">
                        <div className="col-4">
                          <div className="img th-70 img-cover">
                            <img src={newsItem.image} alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="content">
                            <div className="news-cat color-999 fsz-13px text-uppercase mb-1">
                              {newsItem.category}
                              {newsItem.live && (
                                <b className="text-danger">
                                  <i className="icon-6 rounded-circle bg-danger ms-2 me-1 d-inline-block"></i> live
                                </b>
                              )}
                            </div>
                            <h5 className="title ltspc--1">
                              <a href={newsItem.link} className="hover-underline">{newsItem.title}</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="tc-post-grid-default border-1 border-bottom brd-gray pb-10">
                {news.length > 0 && (
                  <div className="item">
                    <div className="img img-cover th-200">
                      <img src={news[0]?.image} alt="" />
                    </div>
                    <div className="content pt-20">
                      <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                        travel
                      </a>
                      <h5 className="title ltspc--1 mb-10">
                        <a href={news[0]?.link}>{news[0]?.title}</a>
                      </h5>
                      <div className="text color-666">
                        Crime rates on trains and buses are up in some of the nation’s biggest [...]
                      </div>
                      <div className="meta-bot lh-1 mt-20">
                        <ul className="d-flex">
                          <li className="date me-5">
                            <a href="#"><i className="la la-calendar me-2"></i> {news[0]?.date}</a>
                          </li>
                          <li className="comment">
                            <a href="#"><i className="la la-comment me-2"></i> 8</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-15">
                <span className="fsz-12px color-999 text-capitalize fst-italic">Related Post</span>
                <a href="page-single-post-creative.html" className="d-flex my-3">
                  <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10"></span>
                  <h6 className="fsz-16px">Top 10 Destinations not to be missed this summer</h6>
                </a>
                <a href="page-single-post-creative.html" className="d-flex my-3">
                  <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10"></span>
                  <h6 className="fsz-16px">Travel experience Switzerland self-sufficient in 4D3N</h6>
                </a>
                <a href="page-single-post-creative.html" className="d-flex my-3">
                  <span className="icon-6 rounded-circle bg-dark me-3 flex-shrink-0 op-4 mt-10"></span>
                  <h6 className="fsz-16px">Discovery Devon island, Canada</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
