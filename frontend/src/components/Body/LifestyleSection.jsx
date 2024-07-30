import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const LifestyleSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('data/json/lifestyleData.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const { mainTitle, posts } = data;

    return (
        <section className="tc-lifestyle pt-50 pb-50">
            <div className="container">
                <p className="color-000 text-uppercase mb-30 ltspc-1">
                    <Link to="/page-blog.html">{mainTitle}</Link> <i className="la la-angle-right ms-1"></i>
                </p>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-6 border-end brd-gray border-1">
                            <div className="tc-post-grid-default">
                                <div className="item">
                                    <div className="img img-cover th-400">
                                        <img src={posts[0].image} alt={posts[0].title} />
                                    </div>
                                    <div className="content pt-30">
                                        <Link to="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                                            {posts[0].category}
                                        </Link>
                                        <h3 className="title ltspc--1 mb-20">
                                            <Link to="page-single-post-creative.html">{posts[0].title}</Link>
                                        </h3>
                                        <div className="text color-666">
                                            {posts[0].description}
                                        </div>
                                        <div className="meta-bot lh-1 mt-40">
                                            <ul className="d-flex">
                                                <li className="date me-5">
                                                    <Link to="#"><i className="la la-calendar me-2"></i> {posts[0].date}</Link>
                                                </li>
                                                <li className="author me-5">
                                                    <Link to="#"><i className="la la-user me-2"></i> by {posts[0].author}</Link>
                                                </li>
                                                <li className="comment">
                                                    <Link to="#"><i className="la la-comment me-2"></i> {posts[0].comments} Comments</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border-end brd-gray border-1">
                            <div className="tc-post-grid-default">
                                {posts.slice(1, 2).map((post, index) => (
                                    <div key={index} className="item">
                                        <div className="img img-cover th-200">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className="content pt-20">
                                            <Link to="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                                                {post.category}
                                            </Link>
                                            <h5 className="title ltspc--1 mb-10">
                                                <Link to="page-single-post-creative.html">{post.title}</Link>
                                            </h5>
                                            <div className="text color-666">
                                                {post.description}
                                            </div>
                                            <div className="meta-bot lh-1 mt-20">
                                                <ul className="d-flex">
                                                    <li className="date me-5">
                                                        <Link to="#"><i className="la la-calendar me-2"></i> {post.date}</Link>
                                                    </li>
                                                    <li className="comment">
                                                        <Link to="#"><i className="la la-comment me-2"></i> {post.comments}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="tc-post-list-style2">
                                <div className="items">
                                    {posts.slice(2, 5).map((post, index) => (
                                        <Link key={index} to="page-single-post-creative.html" className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15">
                                            <div className="row gx-3 align-items-center">
                                                <div className="col-4">
                                                    <div className="img th-50 img-cover">
                                                        <img src={post.image} alt={post.title} />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="content">
                                                        <h6 className="title ltspc--1">{post.title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="tc-post-grid-default">
                                {posts.slice(5).map((post, index) => (
                                    <div key={index} className="item">
                                        <div className="img img-cover th-200">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className="content pt-20">
                                            <Link to="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                                                {post.category}
                                            </Link>
                                            <h5 className="title ltspc--1 mb-10">
                                                <Link to="page-single-post-creative.html">{post.title}</Link>
                                            </h5>
                                            <div className="text color-666">
                                                {post.description}
                                            </div>
                                            <div className="meta-bot lh-1 mt-20">
                                                <ul className="d-flex">
                                                    <li className="date me-5">
                                                        <Link to="#"><i className="la la-calendar me-2"></i> {post.date}</Link>
                                                    </li>
                                                    <li className="comment">
                                                        <Link to="#"><i className="la la-comment me-2"></i> {post.comments}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="tc-post-list-style2">
                                <div className="items">
                                    {posts.slice(6).map((post, index) => (
                                        <Link key={index} to="page-single-post-creative.html" className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15">
                                            <div className="row gx-3 align-items-center">
                                                <div className="col-4">
                                                    <div className="img th-50 img-cover">
                                                        <img src={post.image} alt={post.title} />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="content">
                                                        <h6 className="title ltspc--1">{post.title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifestyleSection;
