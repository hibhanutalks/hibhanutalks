import React, { useEffect, useState } from 'react';

const TravelSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data/json/travelData.json') // Adjust the path as needed
            .then(response => response.json())
            .then(data => setData(data.section))
            .catch(error => console.error('Error fetching travel data:', error));
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="">
            <p className="color-000 text-uppercase mb-30 ltspc-1">
                <a href={data.link}>{data.title}</a> <i className="la la-angle-right ms-1"></i>
            </p>
            <div className="row">
                <div className="col-12">
                    <div className="tc-post-grid-default">
                        {data.posts.slice(0, 1).map((post, index) => (
                            <div className="item" key={index}>
                                <div className="img img-cover th-250">
                                    <img src={post.image} alt={post.alt} />
                                </div>
                                <div className="content pt-20">
                                    <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
                                        {post.category}
                                    </a>
                                    <h4 className="title ltspc--1 mb-10">
                                        <a href={post.postLink}>{post.title}</a>
                                    </h4>
                                    <div className="text color-666">{post.description}</div>
                                    <div className="meta-bot lh-1 mt-20">
                                        <ul className="d-flex">
                                            <li className="date me-5">
                                                <a href="#"><i className="la la-calendar me-2"></i> {post.date}</a>
                                            </li>
                                            <li className="comment">
                                                <a href="#"><i className="la la-comment me-2"></i> {post.comments}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="tc-post-list-style2">
                            <div className="items">
                                {data.posts.slice(1).map((post, index) => (
                                    <a href={post.postLink} className="item d-block border-1 border-top border-bottom-0 brd-gray pt-15 mt-15" key={index}>
                                        <div className="row gx-3 align-items-center">
                                            <div className="col-4">
                                                <div className="img th-70 img-cover">
                                                    <img src={post.image} alt={post.alt} />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="content">
                                                    <small className="news-cat color-999 fsz-13px text-uppercase mb-10">
                                                        {post.category}
                                                    </small>
                                                    <h5 className="title ltspc--1">{post.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelSection;
