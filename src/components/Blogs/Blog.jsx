import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 12;

    useEffect(() => {
        fetch('/data/json/blogData.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="blog-section">
            <div className="container">
                <div className="tc-post-list-style2">
                    <div className="items">
                        {currentBlogs.map((item, index) => (
                            <div
                                key={index}
                                className={`item pt-30 pb-30 mt-30 ${index === 1 ? 'border-0 bg-gray1 p-3' : 'border-1 border-top border-bottom brd-gray'}`}
                            >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="img th-200 img-cover">
                                            <img src={item.image} alt={`Blog Post ${index + 1}`} />
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
                <Pagination
                    blogsPerPage={blogsPerPage}
                    totalBlogs={blogs.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </section>
    );
};

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Blog;
